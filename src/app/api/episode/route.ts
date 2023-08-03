import { secondsToTime } from '@/lib/utils'
import { NextResponse } from 'next/server'
import parse from 'rss-to-json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const episode = searchParams.get('episode')

  if (!episode) {
    return NextResponse.error()
  }

  const feed = await parse('https://media.rss.com/thejobtalk/feed.xml')
  // const res = await fetch(
  //   'https://thejobtalk.com/wp-json/wp/v2/posts?_fields=id,slug,yoast_head_json&slug=' +
  //     episode
  // )
  // const posts = await res.json()

  const episodeNumber = Number(episode.split('-')[1])

  var result = feed.items.filter((episode) => {
    return episode.itunes_episode === episodeNumber
  })[0]

  const response = {
    id: `${result.itunes_episode}`,
    title: `${result.itunes_episode}: ${result.title}`,
    image: result.itunes_image.href,
    published: result.published,
    time: secondsToTime(result.itunes_duration),
    description: result.description,
    audio: result.enclosures.map((enclosure) => ({
      src: enclosure.url,
      type: enclosure.type,
    }))[0],
  }

  return NextResponse.json(response)
}
