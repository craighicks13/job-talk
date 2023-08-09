'use client'

import { useRef } from 'react'

export default function YoutubePreview({
  youtube,
  title,
}: {
  youtube: string
  title: string
}) {
  const youtubeId = youtube.split('v=')[1]
  const youtubeRef = useRef<any>(null)

  const closeModal = () => {
    youtubeRef.current.src = ''
  }

  return (
    <>
      <button
        className="btn btn-outline my-5 w-full text-orange-500 md:my-10"
        onClick={() => {
          if (document) {
            ;(
              document.getElementById('youtube_preview') as HTMLFormElement
            ).showModal()
            youtubeRef.current.src = `https://www.youtube.com/embed/${youtubeId}?feature=oembed`
          }
        }}
      >
        Watch Preview
      </button>
      <dialog id="youtube_preview" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="w-full pt-1">
            <iframe
              ref={youtubeRef}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-96 w-full"
            ></iframe>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
