import { AudioProvider } from '@/components/AudioProvider'
import { TemplateLayout } from '@/components/TemplateLayout'
import { Heebo } from 'next/font/google'
import '@/styles/tailwind.css'
import QueryProvider from '@/components/QueryProvider'

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--heebo-font',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s - Transmit',
    default: 'The Job Talk Podcast',
    description:
      'Welcome to The Job Talk Podcast, where we talk with people who love their jobs. Our guests open up about their challenges, surprises, and secrets to success in their industries.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${heebo.variable} h-full text-base antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <AudioProvider>
            <TemplateLayout>{children}</TemplateLayout>
          </AudioProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
