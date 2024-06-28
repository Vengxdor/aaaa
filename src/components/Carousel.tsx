import {
  ReactIcon,
  NextIcon,
  HtmlIcon,
  CssIcon,
  GitHubIcon,
  GitIcon,
  JavacriptIcon,
  ReduxIcon,
  TailwindIcon,
  ViteIcon
} from './ui/icons'
import BackgroundDots from './ui/BackgroundDots'

/* eslint-disable @next/next/no-img-element */
const logos = [
  {
    name: 'React',
    url: <ReactIcon />
  },
  {
    name: 'Nextjs',
    url: <NextIcon />
  },
  {
    name: 'Html',
    url: <HtmlIcon />
  },
  {
    name: 'Css',
    url: <CssIcon />
  },
  {
    name: 'GitHub',
    url: <GitHubIcon />
  },
  {
    name: 'Git',
    url: <GitIcon />
  },
  {
    name: 'Javascript',
    url: <JavacriptIcon />
  },
  {
    name: 'Redux',
    url: <ReduxIcon />
  },
  {
    name: 'Tailwind',
    url: <TailwindIcon />
  },
  {
    name: 'Vite',
    url: <ViteIcon />
  }
]

const Carousel = () => {
  return (
    <>
      <div className="relative z-10 flex size-full items-center">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2 "
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <i className="text-9xl" key={key}>
                      {logo.url}
                    </i>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <BackgroundDots />
      </div>
    </>
  )
}

export default Carousel
