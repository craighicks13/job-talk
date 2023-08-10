import { Container } from '@/components/Container'

export default function PreviewSkeleton() {
  return (
    <>
      <div className="mt-10 pb-12 pt-16 sm:pb-4 lg:pt-12">
        <Container>
          <div className="mb-4 h-6 w-36 rounded-lg bg-gray-200"></div>
          <div role="status" className="animate-pulse space-y-8">
            <div className="flex aspect-square w-1/2 items-center justify-center rounded-lg bg-gray-300">
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
            <div className="w-full">
              <div className="mb-4 h-8 w-1/2 rounded bg-gray-200"></div>
              <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
              <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200"></div>
              <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200"></div>
              <div className="h-2 max-w-[360px] rounded-full bg-gray-200"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </Container>
      </div>
    </>
  )
}
