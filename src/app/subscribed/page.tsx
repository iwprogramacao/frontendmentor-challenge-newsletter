'use client'

import IconSuccess from '../components/IconSuccess'
import { useRouter } from 'next/navigation'

export default function Subscribed() {
  const { push } = useRouter()
  function handleGoToHome() {
    push('/')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-white font-sans md:bg-navy">
      <main className="flex flex-col justify-center space-y-24 bg-white  p-6 md:h-[520px] md:w-[504px] md:rounded-3xl md:p-16">
        <div className="space-y-4">
          <IconSuccess />
          <h1 className="text-5xl">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent. Please open it and click the
            button inside to confirm your subscription
          </p>
        </div>

        <button
          type="button"
          onClick={() => handleGoToHome()}
          className="mt-4 w-full rounded-lg bg-indigo-950 py-4 font-bold text-white hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-200"
        >
          Dismiss message
        </button>
      </main>
    </div>
  )
}
