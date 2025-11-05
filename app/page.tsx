"use client"
import BubbleMenu from "./components/BubbleMenu"

import { Hero } from "./components/hero";
import { StudentGrid } from "./components/student-grid";
import { CustomDemo } from "./components/Stack";
import { About } from "./components/about";

export default function Home() {

  const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <BubbleMenu
        logo={<span style={{ fontWeight: 800, fontFamily: "Puddles", fontSize: "2rem" }}>uniCLIQ</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        onMenuClick={() => {}}
        className=""
        style={{}}
      />
        <Hero />
        <StudentGrid />
          <About />
    </main>
  )
}
