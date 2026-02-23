'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Database, Target, Users, Zap, Heart, Github, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Speed First',
      description: 'Database design shouldn\'t slow you down. We help you ship faster.'
    },
    {
      icon: Target,
      title: 'Developer Focused',
      description: 'Built by developers, for developers. We understand your workflow.'
    },
    {
      icon: Users,
      title: 'Accessible to All',
      description: 'You don\'t need to be a DBA. If you can describe it, we can build it.'
    },
    {
      icon: Heart,
      title: 'Quality Matters',
      description: 'Every schema is optimized for performance, scalability, and best practices.'
    }
  ]

  const stats = [
    { value: '10,000+', label: 'Schemas Generated' },
    { value: '500+', label: 'Happy Developers' },
    { value: '50+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' }
  ]

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DbCraft</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
              We believe that building great software should be about creativity, 
              not wrestling with database design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
              Why We Built DbCraft
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-text-secondary text-lg">
              <p>
                Every developer has been there. You have a brilliant app idea, you\'re ready to build, 
                but then you hit the wall: database design. Hours turn into days as you debate 
                foreign keys, indexes, and normalization.
              </p>
              <p>
                We built DbCraft to eliminate that friction. Our mission is simple: 
                <span className="text-white font-semibold"> help developers ship faster</span>.
              </p>
              <p>
                Whether you\'re a solo indie hacker, a startup founder, or part of a large team, 
                DbCraft gives you production-ready database schemas in seconds — not days.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white text-center mb-12">
              What We Believe
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-bg-surface border border-white/5 hover:border-accent-cyan/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
              Built With AI
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-text-secondary mb-8 max-w-2xl mx-auto">
              DbCraft is built using cutting-edge AI technology. From the schema generation 
              engine to the code that powers this website, AI helps us move fast and stay lean.
            </motion.p>
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-bg-surface border border-white/5 inline-block">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The Future of Development</h3>
              <p className="text-text-secondary text-sm">
                AI-assisted tools are transforming how we build software. 
                We\'re excited to be part of that future.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
              Get In Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-text-secondary mb-8">
              Have questions? Want to partner? Just want to say hi? 
              We\'d love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-white/10 text-white hover:bg-bg-elevated transition-all">
                <Mail className="w-5 h-5" />
                hello@dbcraft.local
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-white/10 text-white hover:bg-bg-elevated transition-all">
                <Twitter className="w-5 h-5" />
                @dbcraft
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-white/10 text-white hover:bg-bg-elevated transition-all">
                <Github className="w-5 h-5" />
                github.com/dbcraft
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2026 DbCraft. Built with ❤️ and AI.
          </p>
        </div>
      </footer>
    </main>
  )
}
