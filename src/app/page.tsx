"use client"

import HeroSection from '@/components/HottoDev/HeroSection'
import TechStack from '@/components/HottoDev/TechStack'
import Aboutme from '@/components/HottoDev/Aboutme'
import Projects from '@/components/HottoDev/Projects'
import BlogSection from '@/components/HottoDev/BlogSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="blogpage">
        <BlogSection />
      </div>
      <div id="technologies">
        <TechStack />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="Projects">
        <Projects />
      </div>

    </div>
  )
}