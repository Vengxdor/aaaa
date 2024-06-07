import Navbar from '@/ui/Navbar'
import Hero from '@/ui/sections/Hero'

export default function Home () {
  return (
    <>
      <Navbar />
      <main className="mx-auto mt-10 w-[800px]">
        <Hero />
      </main>
    </>
  )
}
