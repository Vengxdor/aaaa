import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Grid from '@/components/ui/Grid'

export default function Home () {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-10 w-[860px]">
        <Hero />
        <Grid />
      </main>
    </>
  )
}
