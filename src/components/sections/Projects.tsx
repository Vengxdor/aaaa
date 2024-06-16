import { type Project } from '../../../types'
import { ReactIcon, TailwindIcon, TypescriptIcon } from '../icons'
import { FadeInSection } from '../ui/FadeInSection'
import ProjectItem from '../ui/ProjectItem'

const projects: Project[] = [
  {
    title: 'DailyDo',
    description:
      'If you forget things often this is your website. Create events, tasks and more.',
    link: 'https://magical-stardust-3c7a73.netlify.app/',
    img: '/project-2.png',
    iconLists: [
      <ReactIcon key="reactIcon" />,
      <TailwindIcon key="tailwindIcon" />,
      <TypescriptIcon key="typescriptIcon" />
    ]
  },
  {
    title: 'Svete Library',
    description:
      'Find different types of books of your like. Filter them or add it to a list.',
    link: 'https://svete-library-git-main-vengxdor.vercel.app/',
    img: '/project-1.png',
    iconLists: [
      <ReactIcon key="reactIcon" />,
      <TailwindIcon key="tailwindIcon" />
    ]
  }
]

export default function Projects () {
  return (
    <section id="projects">
      <FadeInSection>
        <h2 className="mt-10 py-16 text-center text-5xl font-semibold">
          Some of my <span className="text-primary">projects</span>
        </h2>
      </FadeInSection>
      <ul className="grid grid-cols-1 md:grid-cols-2">
        <ProjectItem projects={projects} />
      </ul>
    </section>
  )
}
