'use client'

import { type Project } from '../../../types'
import { PinContainer } from '../3dPin'
import { NavigateIcon } from '../icons'

interface Props {
  projects: Project[]
}

export default function ProjectItem ({ projects }: Props) {
  return (
    <>
      {projects.map((project) => (
        <li key={project.title} className="">
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={project.title}
          >
            <PinContainer title="Visit" href={project.link}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                <img
                  src={project.img}
                  alt="cover"
                  className="absolute bottom-0 z-10"
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {project.title}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0'
                }}
              >
                {project.description}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex size-8 items-center justify-center rounded-full border border-white/[.2] bg-black text-xl lg:size-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                <a
                  target="_blank"
                  href={project.link}
                  className="flex items-center justify-center"
                >
                  <p className="text-purple flex items-center gap-2 text-sm text-primary md:text-xs lg:text-xl">
                    Check Live Site
                    <NavigateIcon />
                  </p>
                </a>
              </div>
            </PinContainer>
          </div>
        </li>
      ))}
    </>
  )
}
