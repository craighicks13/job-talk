'use client'

export default function Error(props) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-xl">{props.error.message}</p>
    </div>
  )
}
