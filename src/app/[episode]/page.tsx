import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { Icons } from '@/components/Icons'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: { episode: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Episode({ params }: Props) {
  let { episode } = params

  const data = await fetch(
    process.env.FRONTEND_URL + '/api/episode?episode=' + episode,
    { cache: 'no-cache' }
  ).then((res) => res.json())

  console.log(data)

  let date = new Date(data.published)

  return (
    <>
      <article className="py-16 lg:py-36">
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              {/* <PlayButton player={player} size="large" /> */}
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {data.title}
                </h1>
                <Image
                  src={data.banner_image}
                  alt={data.title}
                  width="1920"
                  height="1080"
                  className="my-2 w-full rounded-lg"
                />
                <FormattedDate
                  date={date}
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  {data.spotify_link === '' ? (
                    <div className="btn btn-disabled">
                      <Icons.spotify className="h-6 w-6 fill-gray-400" />
                      Spotify
                    </div>
                  ) : (
                    <Link
                      href={data.spotify_link}
                      target="_blank"
                      className="btn bg-[#1db954] text-white hover:bg-[#1ed760]"
                    >
                      <Icons.spotify className="h-6 w-6 fill-white" />
                      Spotify
                    </Link>
                  )}

                  {data.apple_link === '' ? (
                    <div className="btn btn-disabled">
                      <Icons.apple className="h-8 w-8 fill-gray-400" />
                      Apple Podcasts
                    </div>
                  ) : (
                    <Link
                      href={data.apple_link}
                      target="_blank"
                      className="btn bg-[#872EC4] text-white hover:bg-[#B150E2] disabled:cursor-not-allowed disabled:bg-gray-600"
                      aria-disabled={data.apple_link === ''}
                    >
                      <Icons.apple className="h-8 w-8 fill-white" />
                      Apple Podcasts
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </header>
          <hr className="my-12 border-gray-200" />
          <div
            className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Container>
      </article>
    </>
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.episode

  // fetch data
  const episode = await fetch(
    process.env.FRONTEND_URL + '/api/episode?episode=' + slug
  ).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: episode.title,
    openGraph: {
      images: [episode.banner_image, ...previousImages],
    },
  }
}
