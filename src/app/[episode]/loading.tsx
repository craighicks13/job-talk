import { Container } from '@/components/Container'
import { Icons } from '@/components/Icons'
import PreviewSkeleton from '@/components/PreviewSkeleton'

export default function LoadingEpisode() {
  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex animate-pulse flex-col">
          <div className="">
            <div className="mb-4 h-6 w-36 rounded-lg bg-gray-200"></div>
            <div className="mb-4 h-16 w-full rounded bg-gray-200"></div>
            <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-gray-300">
              <svg
                className="h-10 w-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="my-10 h-12 w-full rounded bg-gray-200"></div>
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-400">
                  Listen to episode
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 lg:pt-7">
              <div className="btn btn-disabled">
                <Icons.spotify className="h-6 w-6 fill-gray-400" />
                <span className="hidden sm:flex">Spotify</span>
              </div>

              <div className="btn btn-disabled">
                <Icons.apple className="h-8 w-8 fill-gray-400" />
                <span className="hidden sm:flex">Podcasts</span>
              </div>
              <div className="btn btn-disabled">
                <Icons.youtube className="h-6 w-6 fill-gray-400" />
                <span className="hidden sm:flex">Youtube</span>
              </div>
            </div>
          </div>
        </header>
        <hr className="my-12 border-gray-200" />
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200"></div>
      </Container>
    </article>
  )
}
