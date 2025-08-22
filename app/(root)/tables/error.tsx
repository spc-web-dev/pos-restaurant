'use client'

import { Button } from "@/components/ui/button"

function Error({ error, reset }: {
    error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="grid place-items-center h-screen">
        <div className="flex items-center flex-col gap-4">
            <p className="text-lg">An error occurred: {error.message}</p>
            <Button onClick={reset} variant={'secondary'}>Try again</Button>
        </div>
    </div>
  )
}

export default Error