import { secondsToTime } from '@/lib/utils'
import { NextResponse } from 'next/server'
import parse from 'rss-to-json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page') || 1
  const limit = searchParams.get('limit') || 5
  const feed = await parse('https://media.rss.com/thejobtalk/feed.xml')
  const res = await fetch(
    'https://thejobtalk.com/wp-json/wp/v2/posts?_fields=id,slug,yoast_head_json&page=' +
      page +
      '&per_page=' +
      limit
  )
  const posts = await res.json()

  const total_pages = Math.ceil(feed.items.length / Number(limit))
  const total_episodes = feed.items.length

  const slice_start = (Number(page) - 1) * Number(limit)
  const slice_end = Number(page) * Number(limit)

  const response = {
    total_pages,
    total_episodes,
    episodes: feed.items
      .slice(slice_start, slice_end)
      .map(
        (
          {
            itunes_episode,
            itunes_image,
            title,
            enclosures,
            published,
            itunes_duration,
          },
          index
        ) => ({
          id: `${itunes_episode}`,
          wp_id: posts[index].id,
          slug: posts[index].slug,
          title: `${itunes_episode}: ${title}`,
          image: itunes_image.href,
          published,
          time: secondsToTime(itunes_duration),
          description: posts[index].yoast_head_json.description,
          audio: enclosures.map((enclosure) => ({
            src: enclosure.url,
            type: enclosure.type,
          }))[0],
        })
      ),
  }

  return NextResponse.json(response)
}
