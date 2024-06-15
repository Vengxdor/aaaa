'use client'

import { FlipWords } from '@/components/FlipWords'
import { NavigateIcon } from '@/components/icons'

export default function Hero () {
  const words = [
    'Front-end developer.',
    'React developer.',
    'NextJs developer.',
    'Self taught developer'
  ]
  return (
    <section
      id="home"
      className="flex h-[55vh] flex-col items-center justify-center gap-4"
    >
      <header className="grid gap-4">
        <h1 className="animate-onload-mid text-balance text-7xl font-bold">
          Turning ideas into real life{' '}
          <span className="bg-gradient-to-r text-primary">
            products
          </span>{' '}
          is my calling.
        </h1>
        <div className="animate-onload-mid text-lg opacity-80">
          <span className="">Steven Fernandez -</span>
          <FlipWords words={words} />
        </div>
      </header>
      <div>
        <a href='#projects' className="focus:outline-nonefocus:ring-slate-400 mt-10 inline-flex  h-12 w-52 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition duration-300 hover:-translate-y-1  hover:scale-105 focus:ring-offset-slate-50">
          See my work
          <NavigateIcon />
        </a>
      </div>
    </section>
  )
}
