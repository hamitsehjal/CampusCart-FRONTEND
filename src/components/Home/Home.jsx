import React from 'react'
import { Hero } from './Hero'
import { Quality } from './Quality'
import { BestQuality } from './BestQuality'
import { PartnerSection } from './PartnerSection'

export const Home = () => {
  return (
    
    <main className='min-h-screen space-y-5 mb-9'>
      <Hero />
      <Quality />
      <BestQuality /> 
      <PartnerSection />
    </main>
  )
}
