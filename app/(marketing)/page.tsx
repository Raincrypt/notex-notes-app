import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import { Hero } from './_components/Hero'

export default function MarketingPage() {
  return (
    <main className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Header/>
        <Hero/>
      </div>
      <Footer/>
    </main>
  )
}
