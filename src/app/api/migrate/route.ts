import { prisma } from '@/lib/prisma'
import { secondsToTime } from '@/lib/utils'
import { NextResponse } from 'next/server'
import parse from 'rss-to-json'

type PodcastLinks = {
  id: number
  apple: string
  spotify: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page') || 1
  const limit = 54 //searchParams.get('limit') || 5
  const feed = await parse('https://media.rss.com/thejobtalk/feed.xml')
  const res = await fetch(
    'https://thejobtalk.com/wp-json/wp/v2/posts?_fields=id,slug,content,yoast_head_json&page=' +
      page +
      '&per_page=' +
      limit
  )
  const posts = await res.json()

  const total_pages = Math.ceil(feed.items.length / Number(limit))
  const total_episodes = feed.items.length

  const slice_start = (Number(page) - 1) * Number(limit)
  const slice_end = Number(page) * Number(limit)

  const episodes = await Promise.all(
    feed.items.map(async ({ itunes_episode }, index) => {
      return await getPodcastLinks(
        itunes_episode,
        posts[index].content.rendered
      )
    })
  )

  updatePodcastLinks(episodes)

  async function updatePodcastLinks(episodes: Array<PodcastLinks>) {
    try {
      const updatePromises = episodes.map((episode) =>
        prisma.episode.update({
          where: { episode_id: episode.id },
          data: { apple_link: episode.apple, spotify_link: episode.spotify },
        })
      )

      await Promise.all(updatePromises)
      return NextResponse.json({ success: true })
    } catch (e) {
      return NextResponse.json({
        failure: true,
        error: e,
      })
    }
  }

  // const response = await createResponse(
  //   total_pages,
  //   total_episodes,
  //   feed,
  //   posts,
  //   slice_start,
  //   slice_end
  // )

  // try {
  //   const episodes = await prisma.episode.createMany({
  //     data: response.episodes,
  //   })
  //   return NextResponse.json({ success: true })
  // } catch (e) {
  //   return NextResponse.json({
  //     failure: true,
  //     error: e,
  //     data: response.episodes,
  //   })
  // }
}

async function getYoutubeLinks(content: string): Promise<string[]> {
  return new Promise((resolve) => {
    var regex = /https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)/g
    const matches = Array.from(
      content.matchAll(regex),
      (m) => 'https://www.youtube.com/watch?v=' + m[1]
    )

    resolve(matches)
  })
}

async function getPodcastLinks(
  id: number,
  content: string
): Promise<PodcastLinks> {
  return new Promise((resolve) => {
    const appleRegex =
      /https:\/\/podcasts\.apple\.com\/ca\/podcast\/the\-job\-talk\-podcast\/[^\s]+/g
    const spotifyRegex = /https:\/\/open\.spotify\.com\/episode\/[^\s]+/g
    let apple = Array.from(content.matchAll(appleRegex), (m) => m[0])[0]
    apple = apple ? apple.replace('"', '') : ''
    let spotify = Array.from(content.matchAll(spotifyRegex), (m) => m[0])[0]
    spotify = spotify ? spotify.replace('"', '') : ''
    resolve({ id, apple, spotify })
  })
}

async function createResponse(
  total_pages,
  total_episodes,
  feed,
  posts,
  slice_start,
  slice_end
) {
  const response = {
    total_pages,
    total_episodes,
    episodes: await Promise.all(
      feed.items
        .slice(slice_start, slice_end)
        .map(
          async (
            {
              itunes_episode,
              itunes_image,
              title,
              description,
              enclosures,
              published,
              itunes_duration,
              podcast_transcript,
            },
            index
          ) => {
            const youtube_links = await getYoutubeLinks(
              posts[index].content.rendered
            )

            return {
              episode_id: itunes_episode,
              published: new Date(published),
              title: `${itunes_episode}: ${title}`,
              slug: posts[index].slug,
              image: itunes_image.href,
              banner_image: posts[index].yoast_head_json?.og_image?.[0]?.url,
              youtube_preview: youtube_links[0],
              youtube_full: youtube_links[1],
              keywords:
                posts[index].yoast_head_json?.schema?.['@graph'][0]?.keywords,
              preview_description:
                posts[index].yoast_head_json.description || '',
              content: description,
              transcript: podcast_transcript.url || '',
              time: secondsToTime(itunes_duration),
              audio: enclosures.map((enclosure) => ({
                src: enclosure.url,
                type: enclosure.type,
              }))[0],
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          }
        )
    ),
  }

  return response
}
