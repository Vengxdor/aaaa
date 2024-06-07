'use client'

import { NavigateIcon } from '../icons'

export default function Hero () {
  const handleLoad = () => {
    console.log('loaded')
  }
  return (
    <section className="flex h-[55vh] flex-col items-center justify-center gap-4">
      <header className="grid gap-4">
        <h1
          onLoad={handleLoad}
          className="onload text-balance text-7xl font-bold"
        >
          Turning ideas into real life{' '}
          <span className="bg-gradient-to-r from-accent/80 to-secondary bg-clip-text text-transparent">
            products
          </span>{' '}
          is my calling.
        </h1>
        <p className="onload text-lg opacity-80">
          Steven Fernandez - Front-end developer.
        </p>
      </header>
      <div>
        {/* todo: add hover and active effect */}
        <button className="focus:outline-nonefocus:ring-slate-400  mt-7 inline-flex h-12 w-52 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors  focus:ring-offset-slate-50">
          See my work
          <NavigateIcon />
        </button>
      </div>
    </section>
  )
}
