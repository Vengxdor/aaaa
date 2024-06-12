'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../BentoGrid'

import GridPattern from './GridPattern'
import CloudOfIcons from './Cloud'
import { EmailIcon, LinkedinIcon, TwitterIcon } from '../icons'
import { toast } from 'sonner'
import { Meteors } from '../Meteors'

const Contact = () => {
  const handleCopyEmail = async () => {
    try {
      toast.success('Email copied.')
      await navigator.clipboard.writeText('Stevenfernandeztango3@gmail.com')
    } catch (error) {
      console.error(error)
    }
  }
  const handleCopy = () => {
    handleCopyEmail().catch((err) => {
      console.error(err)
    })
  }
  return (
    <>
      <div className="relative z-10 size-full overflow-hidden p-3 pt-7">
        <header className="text-center">
          <h2 className="text-6xl font-bold">Interested?</h2>
          <p className="text-sm text-white/50">Connect with me here:</p>
        </header>
        <div className="mt-10 flex items-center justify-center gap-3 text-6xl">
          <a
            className="opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
            href="#"
            aria-label='See my linkedin profile'
          >
            <LinkedinIcon />
          </a>
          <button
            aria-label='copy email'
            role='button'
            onClick={handleCopy}
            className="opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
          >
            <EmailIcon />
          </button>
          <a
            className="opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
            href="#"
            aria-label='See my twitter profile'
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 size-full overflow-hidden">
        <Meteors />
      </div>
    </>
  )
}
const Information = () => (
  <>
    <div className="size-full p-4 px-6">
      <h2 className="my-2 text-3xl font-semibold">Hello! Steven here.</h2>
      <p className="opacity-90">
        I&apos;m a front-end developer based in Chicago, IL. Currently, I
        freelance for individuals who need visually appealing websites built
        with best practices.
      </p>
      <br />
      <p className="opacity-90">
        I began my journey in 2022, and since then, I have experienced
        exponential growth in my knowledge. Now, I am capable of creating
        excellent user experiences.
      </p>
    </div>
    <div className="overflow-hidden rounded-xl opacity-30 shadow-inner">
      <GridPattern />
    </div>
  </>
)

const gridItems = [
  {
    header: (
      <img
        className="size-full rounded-xl object-cover"
        src="/author.jpg"
        alt=""
      />
    )
  },
  {
    header: <Information />
  },
  {
    header: <Contact />
  },
  {
    header: <CloudOfIcons />
  }
]

export default function Grid () {
  return (
    <BentoGrid className="mt-20 animate-onload-slow ">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={`${i === 1 || i === 2 ? 'md:col-span-2 ' : ''} ${
            i === 2 && 'md:row-span-1'
          }`}
        />
      ))}
    </BentoGrid>
  )
}
