'use client'

import { ChangeEvent, useState } from 'react'

export default function Input() {
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [typed, setTyped] = useState(false)

  function handleValidateEmail(event: ChangeEvent<HTMLInputElement>) {
    const email = event.target.value
    setTyped(true)
    const regexForEmailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const isValidEmail = regexForEmailValidation.test(email)
    setIsEmailValid(isValidEmail)
  }

  function handleSubscription() {
    if (isEmailValid) {
      window.location.href = 'http://localhost:3000/subscribed'
    }
  }

  return (
    <form>
      <label htmlFor="email">Email address</label>
      <input
        name="email"
        className="w-full rounded-lg border border-zinc-300 p-4 focus:bg-orange-50 focus:outline-1 focus:outline-zinc-800"
        placeholder="email@company.com"
        onChange={(event) => handleValidateEmail(event)}
      ></input>
      {!isEmailValid && typed && (
        <span className="mt-2 block text-red-400">Digit a valid email</span>
      )}
      <button
        type="button"
        onClick={() => handleSubscription()}
        disabled={!isEmailValid}
        className={`mt-4 w-full rounded-lg bg-orange-600 py-4 font-bold text-white hover:shadow-xl disabled:bg-indigo-950 ${
          isEmailValid && 'hover:shadow-orange-200'
        }`}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}
