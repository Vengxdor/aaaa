import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-10 w-[860px]">
        <Hero />
        <Grid />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
