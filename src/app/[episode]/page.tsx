'use client'

import { useMemo } from 'react'
import Head from 'next/head'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { PlayButton } from '@/components/player/PlayButton'
import { useQuery } from '@tanstack/react-query'

export default function Episode({ params }: { params: { episode: string } }) {
  let { episode } = params

  const { data, isFetching } = useQuery(['episode', episode], async () => {
    const res = await fetch('/api/episode?episode=' + episode)
    console.log(res)
    return res.json()
  })

  if (isFetching) {
    return <div>Loading...</div>
  }

  let date = new Date(data.published)

  // let audioPlayerData = useMemo(
  //   () => ({
  //     title: data.title,
  //     audio: {
  //       src: data.audio.src,
  //       type: data.audio.type,
  //     },
  //     link: `/${data.id}`,
  //   }),
  //   [data]
  // )
  // let player = useAudioPlayer(audioPlayerData)

  return (
    <>
      <Head>
        <title>{`${data.title} - Their Side`}</title>
        <meta name="description" content={data.description} />
      </Head>
      <article className="py-16 lg:py-36">
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              {/* <PlayButton player={player} size="large" /> */}
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {data.title}
                </h1>
                <FormattedDate
                  date={date}
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                />
              </div>
            </div>
          </header>
          <hr className="my-12 border-gray-200" />
          <div
            className="prose prose-slate mt-14 flex flex-col gap-3 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </Container>
      </article>
    </>
  )
}
/*
export async function getStaticProps({ params }) {
  let feed = await parse('https://thejobtalk.com/wp-json/wp/v2/posts')
  console.log(feed)
  let episode = feed.items
    .map(({ id, title, description, content, enclosures, published }) => ({
      id: id.toString(),
      title: `${id}: ${title}`,
      description,
      content,
      published,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }))
    .find(({ id }) => id === params.episode)

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episode,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  //let feed = await parse('https://their-side-feed.vercel.app/api/feed')
  let feed = await parse('https://thejobtalk.com/wp-json/wp/v2/posts')

  return {
    paths: feed.items.map(({ id }) => ({
      params: {
        episode: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
*/
