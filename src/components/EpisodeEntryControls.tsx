'use client'

import { useAudioPlayer } from '@/components/AudioProvider'
import Link from 'next/link'
import { Icons } from './Icons'
import { useMemo } from 'react'
import { PlayButton } from './player/PlayButton'

function PlayPauseIcon({ playing, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
      {playing ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        />
      ) : (
        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
      )}
    </svg>
  )
}

type Props = {
  episode: any
  controlType?: 'full' | 'simple'
}

export default function EpisodeEntryControls({
  episode,
  controlType = 'full',
}: Props) {
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

  let player = useAudioPlayer(audioPlayerData)

  return (
    <>
      {controlType === 'full' ? (
        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={() => player.toggle()}
            className="flex items-center text-sm font-bold leading-6 text-orange-500 hover:text-orange-700 active:text-orange-900"
            aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
              episode.title
            }`}
          >
            <PlayPauseIcon
              playing={player.playing}
              className="h-2.5 w-2.5 fill-current"
            />
            <span className="ml-3" aria-hidden="true">
              Listen
            </span>
          </button>
          <span aria-hidden="true" className="text-sm font-bold text-slate-400">
            /
          </span>
          <span className="text-sm font-bold leading-6 text-slate-500">
            <Icons.clock className="-mt-1 mr-1 inline-block h-4 w-4" />
            {episode.time}
          </span>
          <span aria-hidden="true" className="text-sm font-bold text-slate-400">
            /
          </span>
          <Link
            href={`/${episode.slug}`}
            className="flex items-center text-sm font-bold leading-6 text-orange-500 hover:text-orange-700 active:text-orange-900"
            aria-label={`Show notes for episode ${episode.title}`}
          >
            Show notes
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <PlayButton player={player} size="medium" />
          <div>Listen now</div>
        </div>
      )}
    </>
  )
}
