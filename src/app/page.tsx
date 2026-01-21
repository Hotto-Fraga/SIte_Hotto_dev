"use client"

import HeroSection from '@/components/HottoDev/HeroSection'
import TechStack from '@/components/HottoDev/TechStack'
import ProjectsShowcase from '@/components/MiniProjects/ProjectsShowcase'

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <div id="technologies">
        <TechStack />
      </div>

      <ProjectsShowcase />
    </div>
  )
}