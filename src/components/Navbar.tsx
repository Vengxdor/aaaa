import { Dock, DockIcon } from '@/components/ui/dock'
import React from 'react'
import { TooltipLink } from './Tooltip'
import { ContactIcon, HammerIcon, HomeIcon, InfoIcon } from './ui/icons'

export type IconProps = React.HTMLAttributes<SVGElement>

export default function Navbar () {
  return (
    <div className="pointer-events-none fixed inset-0  flex h-dvh w-dvw items-end">
      <Dock className="pointer-events-auto z-50 mb-10 bg-zinc-950 backdrop-blur-lg">
        <DockIcon>
          <TooltipLink toolText="Home">
            <a className="flex size-full items-center justify-center" href="#">
              <HomeIcon className="size-6" />
            </a>
          </TooltipLink>
        </DockIcon>
        <DockIcon>
          <TooltipLink toolText="About">
            <a
              className="flex size-full items-center justify-center"
              href="#about"
            >
              <InfoIcon className="size-6" />
            </a>
          </TooltipLink>
        </DockIcon>
        <DockIcon>
          <TooltipLink toolText="Projects">
            <a
              className="flex size-full items-center justify-center"
              href="#projects"
            >
              <HammerIcon className="size-6" />
            </a>
          </TooltipLink>
        </DockIcon>
        <DockIcon>
          <TooltipLink toolText="Contact">
            <a
              className="flex size-full items-center justify-center"
              href="#contact"
            >
              <ContactIcon className="size-6" />
            </a>
          </TooltipLink>
        </DockIcon>
      </Dock>
    </div>
  )
}
