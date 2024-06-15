import { GitHubIcon, LinkedinIcon, TwitterIcon } from '../icons'
import EmailButton from '../ui/EmailButton'

export default function Footer () {
  return (
    <footer
      className="mx-auto mb-5 mt-20 flex w-[860px] items-center justify-between"
      id="contact"
    >
      <div>
        <p>Create by Steven Fernandez ❤️</p>
      </div>
      <div className="flex items-center gap-3 text-2xl">
        <a
          className="text-xl opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="https://github.com/Vengxdor"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="https://www.linkedin.com/in/steven-fernandez-11a522274/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="https://x.com/Steven_dev2"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <EmailButton />
      </div>
    </footer>
  )
}
