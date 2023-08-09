import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page') || 1
  const limit = searchParams.get('limit') || 5
  const feed = await prisma.episode.findMany({
    take: Number(limit),
    skip: (Number(page) - 1) * Number(limit),
    orderBy: {
      episode_id: 'desc',
    },
  })

  return NextResponse.json({ episodes: feed })
}
