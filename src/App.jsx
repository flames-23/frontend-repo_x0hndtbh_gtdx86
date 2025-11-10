import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-bold tracking-widest">DEV.PORTFOLIO</a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
              Let’s talk <ArrowRight size={16} />
            </a>
          </div>
          <div className="md:hidden">
            {/* Simple anchor menu for mobile (scroll behavior handled by CSS) */}
            <a href="#contact" className="text-white/90 border border-white/20 px-3 py-1 rounded-full">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

const projects = [
  {
    title: 'Interactive 3D Grid',
    description: 'Real‑time 3D interactions powered by Spline and WebGL.',
    tags: ['Spline', 'WebGL', 'UX'],
    link: '#',
  },
  {
    title: 'Animated Landing Page',
    description: 'Micro‑interactions and motion‑driven storytelling.',
    tags: ['Framer Motion', 'Accessibility'],
    link: '#',
  },
  {
    title: 'E‑commerce UI Kit',
    description: 'Elegant components with focus on conversion.',
    tags: ['Design System', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live metrics, fluid charts, and dark UI.',
    tags: ['React', 'Charts'],
    link: '#',
  },
]

function Hero() {
  const nameChars = useMemo(() => Array.from('ALEX DEV'), [])

  return (
    <section id="home" className="relative h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> Available for work
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
            <span className="sr-only">Alex Dev — Web Developer</span>
            <div className="flex flex-wrap gap-1">
              {nameChars.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 120 }}
                  className="inline-block"
                >
                  {c === ' ' ? '\u00A0' : c}
                </motion.span>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="block text-white/70 text-lg sm:text-2xl mt-4 font-normal"
            >
              Web Developer • Interactive 3D • Motion‑first UI
            </motion.span>
          </h1>

          <div className="mt-10 flex items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white hover:border-white transition-colors">
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-white/70">
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin /></a>
            <a href="#contact" aria-label="Email" className="hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="text-white/60 mt-2">Interfaces that feel alive and purposeful.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="aspect-video bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/15 text-white/80">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-white/10 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const skills = ['React', 'Framer Motion', 'Spline', 'TypeScript', 'Tailwind', 'Accessibility', 'Node.js']
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Crafting motion‑driven web experiences</h2>
            <p className="text-white/70 mt-4">
              I design and build modern interfaces with a focus on animation, interactivity, and performance. My work blends
              minimalist aesthetics with tactile feedback so every interaction feels intentional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Core stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full border border-white/15 text-white/80">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something striking</h2>
          <p className="text-white/70 mt-2">Tell me about your project, timeline, and goals.</p>
        </div>

        <div className="mt-10">
          <form action="mailto:you@example.com" method="post" encType="text/plain" className="grid gap-4">
            <input type="text" name="name" placeholder="Your name" className="bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white/40 placeholder:text-white/40" />
            <input type="email" name="email" placeholder="Your email" className="bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white/40 placeholder:text-white/40" />
            <textarea name="message" rows="5" placeholder="Your message" className="bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white/40 placeholder:text-white/40" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
              Send message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p>© {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="/test" className="hover:text-white">System</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
