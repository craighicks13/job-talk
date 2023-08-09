'use client'
import { useMemo } from 'react'
import { useAudioPlayer } from './AudioProvider'

export default function AudioPlayer(data) {
  let audioPlayerData = useMemo(
    () => ({
      title: data.title,
      audio: {
        src: data.audio.src,
        type: data.audio.type,
      },
      link: `/${data.slug}`,
    }),
    [data]
  )
  let player = useAudioPlayer(audioPlayerData)

  return <></>
}
