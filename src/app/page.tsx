'use client'

import { Container } from '@/components/Container'
import EpisodeEntry from '@/components/EpisodeEntry'
import PreviewSkeleton from '@/components/PreviewSkeleton'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function Home() {
  // const res = await fetch(
  //   process.env.FRONTEND_URL + '/api/episodes?page=2&limit=5'
  // )
  // const { total_pages, total_episodes, episodes } = await res.json()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(
      ['query'],
      async ({ pageParam = 1 }) => {
        const res = await fetch('/api/episodes?page=' + pageParam + '&limit=10')
        return res.json()
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1
        },
      }
    )

  return (
    <>
      <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
        <Container>
          <h1 className="text-2xl font-bold leading-7 text-slate-900">
            Episodes
          </h1>
        </Container>
        {!data ? (
          <>
            <PreviewSkeleton />
            <PreviewSkeleton />
          </>
        ) : (
          <>
            <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
              {data?.pages.map((page) =>
                page.episodes.map((episode) => (
                  <EpisodeEntry key={episode.id} episode={episode} />
                ))
              )}
            </div>
            {isFetchingNextPage ? (
              <>
                <PreviewSkeleton />
                <PreviewSkeleton />
              </>
            ) : (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="w-2/3 rounded bg-orange-400 p-3 text-center font-bold text-white hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-400"
                >
                  {isFetchingNextPage
                    ? 'Loading more..'
                    : (data?.pages.length ?? 0) < 6
                    ? 'Load More'
                    : 'Nothing more to load'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}
