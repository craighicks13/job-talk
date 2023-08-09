import { prisma } from '@/lib/prisma'
import { secondsToTime } from '@/lib/utils'
import { NextResponse } from 'next/server'
import parse from 'rss-to-json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const episode = searchParams.get('episode')

  if (!episode) {
    return NextResponse.error()
  }

  const response = await prisma.episode.findFirst({
    where: {
      slug: episode,
    },
  })

  return NextResponse.json(response)
}
