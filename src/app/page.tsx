import Image from 'next/image'
import signUpMobile from './assets/illustration-sign-up-mobile.svg'
import signUpDesktop from './assets/illustration-sign-up-desktop.svg'
import IconList from './components/IconList'
import Input from './components/Input'

export default function Home() {
  return (
    <main className="mt-auto flex h-full flex-col items-center justify-center bg-white font-sans md:h-screen md:bg-navy">
      <Image
        src={signUpMobile}
        alt="Newsletter Hero"
        className="w-full bg-white md:hidden"
      />
      <div className="flex h-full items-center justify-center bg-white md:bg-transparent md:p-4">
        <div className="flex w-full max-w-[58rem] items-center justify-center gap-16 bg-white px-6 py-10 md:rounded-3xl md:py-6">
          <div className="max-w-[23.5rem] space-y-6">
            <h1 className="text-4xl md:text-title">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="space-y-2">
              <div className="flex gap-4">
                <IconList />
                <p className="leading-6">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="flex gap-4">
                <IconList />
                <p className="leading-6">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex gap-4">
                <IconList />
                <p className="leading-6">And much more!</p>
              </div>
            </div>
            <Input />
          </div>
          <Image src={signUpDesktop} alt="" className="hidden md:block" />
        </div>
      </div>
    </main>
  )
}
