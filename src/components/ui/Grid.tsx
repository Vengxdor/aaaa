/* eslint-disable react/jsx-key */ // todo
import React from 'react'
import { BentoGrid, BentoGridItem } from '../BentoGrid'
import Carousel from './Carousel'

import GridPattern from './GridPattern'

export default function Grid () {
  return (
    <BentoGrid className="mt-20 animate-onload-slow ">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={`${i === 1 || i === 2 ? 'md:col-span-2 ' : ''} ${i === 4 && 'md:col-span-3'}`}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex size-full min-h-24 flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
)
const Information = () => (
  <>
    <div className="size-full p-4 px-6">
      <h2 className="my-2 text-3xl font-semibold">Hello! Steven here.</h2>
      <p className='opacity-90'>
        I&apos;m a front-end developer based in Chicago, IL. Currently, I freelance
        for individuals who need visually appealing websites built with best
        practices.
      </p>
      <br />
      <p className='opacity-90'>
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
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: (
      <img
        className="size-full rounded-xl object-cover"
        src="/author.jpg"
        alt=""
      />
    )
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Information />
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />
  },

  {
    header: <Carousel />
  }
]
