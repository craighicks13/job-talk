'use client'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import Image from 'next/image'
import EpisodeEntryControls from '@/components/EpisodeEntryControls'

export default function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <FormattedDate
          date={date}
          className="order-first font-mono text-sm leading-7 text-slate-500"
        />
        <div className="flex items-start gap-5">
          <Image
            src={episode.image}
            alt={episode.title}
            width="640"
            height="640"
            className="my-2 w-1/5 rounded-lg"
          />
          <div>
            <h2
              id={`episode-${episode.id}-title`}
              className="mt-2 text-lg font-bold text-slate-900"
            >
              <Link href={`/${episode.slug}`}>{episode.title}</Link>
            </h2>
            <p className="mt-1 flex flex-col gap-4 text-sm leading-7 text-slate-700">
              {episode.preview_description}
            </p>
          </div>
        </div>
        <EpisodeEntryControls episode={episode} />
      </Container>
    </article>
  )
}
