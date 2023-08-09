import Script from 'next/script'

export default function EpisodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="beforeInteractive"
      />
      {children}
    </>
  )
}
