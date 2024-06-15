import { EmailIcon, GitHubIcon, LinkedinIcon, TwitterIcon } from '../icons'

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
          href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          className="opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
          href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>
      </div>
    </footer>
  )
}
