'use client'

import { useMemo } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import Image from 'next/image'
import EpisodeEntryControls from '@/components/EpisodeEntryControls'

export default function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/${episode.slug}`,
    }),
    [episode]
  )

  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <Image
            src={episode.image}
            alt={episode.title}
            width="640"
            height="640"
            className="my-2 w-1/2 rounded-lg"
          />
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <Link href={`/${episode.slug}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          />
          <p className="mt-1 flex flex-col gap-4 text-base leading-7 text-slate-700">
            {episode.preview_description}
          </p>
          <EpisodeEntryControls
            episode={episode}
            audioPlayerData={audioPlayerData}
          />
        </div>
      </Container>
    </article>
  )
}
