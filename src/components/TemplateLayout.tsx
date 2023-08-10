'use client'

import { Fragment, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AudioPlayer } from '@/components/player/AudioPlayer'
import { Icons } from './Icons'

const socialLinks = [
  {
    name: 'Spotify',
    icon: (
      <Icons.spotify className="h-6 w-6 fill-slate-400 group-hover:fill-slate-600" />
    ),
    link: 'https://open.spotify.com/show/5d1tPxU7lvQWEPuN74BMgp?si=Yw8EoCLATHCd5bklzhiYaw',
  },
  {
    name: 'Apple Podcast',
    icon: (
      <Icons.apple className="h-6 w-6 fill-slate-400 group-hover:fill-slate-600" />
    ),
    link: 'https://podcasts.apple.com/ca/podcast/the-job-talk-podcast/id1615436433',
  },
  {
    name: 'RSS Feed',
    icon: (
      <Icons.rss className="h-6 w-6 fill-slate-400 group-hover:fill-slate-600" />
    ),
    link: 'https://media.rss.com/thejobtalk/feed.xml',
  },
  {
    name: 'YouTube Channel',
    icon: (
      <Icons.youtube className="h-6 w-6 fill-slate-400 group-hover:fill-slate-600" />
    ),
    link: 'https://www.youtube.com/channel/UCpmmC9kSOcCn0HUCqakn34Q/featured',
  },
]

function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

function Waveform(props) {
  let id = useId()
  let bars = {
    total: 100,
    width: 2,
    gap: 2,
    minHeight: 40,
    maxHeight: 100,
  }

  let barHeights = Array.from(
    { length: bars.total },
    randomBetween(bars.minHeight, bars.maxHeight)
  )

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="#FA7516" />
          <stop offset="50%" stopColor="#FA7516" />
          <stop offset="100%" stopColor="#FA7516" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern
          id={`${id}-pattern`}
          width={bars.total * bars.width + bars.total * bars.gap}
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: bars.total }, (_, index) => (
            <rect
              key={index}
              width={bars.width}
              height={`${barHeights[index]}%`}
              x={bars.gap * (index + 1) + bars.width * index}
              fill={`url(#${id}-fade)`}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-gradient)`}
        mask={`url(#${id}-mask)`}
        opacity="0.25"
      />
    </svg>
  )
}

type TinyWaveFormIconProps = {
  colors?: string[]
  className?: string
}

function TinyWaveFormIcon({ colors, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
        className={colors[0]}
      />
      <path
        d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
        className={colors[1]}
      />
    </svg>
  )
}

function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-amber-300', 'fill-orange-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4'
        )}
      >
        Welcome to The Job Talk Podcast, where we talk with people who love
        their jobs. Our guests open up about their challenges, surprises, and
        secrets to success in their industries. Through conversation we explore
        their careers, past work experiences, and the education that got them to
        where they are now.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-orange-500 hover:text-orange-700 active:text-orange-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}

function PartnerSection(props) {
  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-blue-300', 'fill-blue-500']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">Sponsors and Partners</span>
      </h2>
      <p className={clsx('mt-2 text-base leading-7 text-slate-700')}>
        We are grateful for the support and collaboration of our sponsors and
        partners. They help us make this podcast possible.
      </p>

      <button className="btn btn-outline btn-sm mt-2 text-orange-500 hover:border-orange-600 hover:bg-orange-500 hover:text-white active:text-orange-900">
        <Link href="/sponsors-and-partners">Check them out</Link>
      </button>
    </section>
  )
}

export function TemplateLayout({ children }) {
  let hosts = ['Kim Brix', 'Robert Belland']

  return (
    <>
      <header className="h-full bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-full lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500">Hosted by</span>
          <span className="mt-6 flex h-full gap-6  font-bold text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </span>
          <span className="block h-fit ">
            <Link
              href="mailto:talk@thejobtalk.com"
              className="group flex items-center"
              aria-label="Contact"
            >
              <span className="mb-3 font-mono text-slate-500">Contact</span>
              <Icons.email className="h-6 w-6 rotate-90 fill-slate-400 group-hover:fill-slate-600" />
            </Link>
          </span>
        </div>
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
          >
            <Image
              className="w-full"
              src="/images/poster.png"
              alt="Welcome to the Job Talk Podcast"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="mt-3 text-lg font-light leading-8 text-slate-700">
              Explore careers and listen to stories from every job imaginable!
            </p>
          </div>
          <AboutSection className="mt-12 hidden lg:block" />
          <PartnerSection className="mt-12 hidden lg:block" />
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
              <TinyWaveFormIcon
                colors={['fill-indigo-300', 'fill-blue-300']}
                className="h-2.5 w-2.5"
              />
              <span className="ml-2.5">Listen</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
              {socialLinks.map(({ name, icon, link }) => (
                <li key={name} className="flex">
                  <Link
                    href={link}
                    className="group flex items-center"
                    aria-label={name}
                  >
                    {icon}
                    <span className="hidden sm:ml-3 sm:block">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection />
          <PartnerSection className="mt-10" />
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <Icons.person className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Hosted by</span>
          </h2>
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="mailto:talk@thejobtalk.com"
              className="group flex items-center"
              aria-label="Contact"
            >
              <span className="mr-3 font-mono text-slate-500">Contact</span>
              <Icons.email className="h-6 w-6 fill-slate-400 text-sm group-hover:fill-slate-600" />
            </Link>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </>
  )
}
