'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">An unexpected error occurred. Please try again.</p>
          <div className="flex gap-4">
            <button onClick={() => reset()} className="bg-blue-600 text-white px-5 py-2 rounded-md">Try again</button>
            <a href="/" className="text-blue-600 font-semibold hover:underline">Go home</a>
          </div>
        </div>
      </body>
    </html>
  )
}


