'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Sparkles, FileCode, Server, Check } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Describe Your App',
      description: 'Start by telling us what you\'re building. No technical jargon needed — just describe your app in plain English.',
      details: [
        'Mention key entities (users, products, orders)',
        'Describe relationships (users have orders, orders have items)',
        'Specify any special requirements (notifications, real-time updates)',
        'Our AI understands context and industry patterns'
      ],
      example: 'I want a food delivery app where customers browse restaurants, place orders, and drivers deliver them.',
      color: 'from-accent-cyan to-blue-500'
    },
    {
      icon: Sparkles,
      title: 'AI Generates Your Schema',
      description: 'Our intelligent engine analyzes your requirements and creates an optimized database structure.',
      details: [
        'Analyzes relationships and cardinality',
        'Chooses optimal data types',
        'Adds indexes for performance',
        'Includes foreign key constraints'
      ],
      example: 'Creates Users, Restaurants, Orders, OrderItems, Drivers tables with proper relationships.',
      color: 'from-accent-purple to-pink-500'
    },
    {
      icon: FileCode,
      title: 'Export In Any Format',
      description: 'Get your schema in the format that fits your stack. Multiple exports, zero extra work.',
      details: [
        'Raw SQL for any database',
        'Prisma schema for Node.js apps',
        'Django models for Python projects',
        'Rails migrations for Ruby apps',
        'Visual ERD diagrams for documentation'
      ],
      example: 'Download SQL, Prisma schema, and PNG diagram — all from one description.',
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: Server,
      title: 'Deploy & Iterate',
      description: 'Go live faster with one-click deployments, then refine as your app grows.',
      details: [
        'One-click deploy to Supabase',
        'Railway integration',
        'Self-host with downloaded SQL',
        'Version control your schemas',
        'Iterate and regenerate as needed'
      ],
      example: 'Deploy to Supabase in seconds, then modify your schema as requirements change.',
      color: 'from-orange-500 to-accent-cyan'
    }
  ]

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
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
              How DbCraft Works
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
              From a simple description to a production-ready database in minutes, 
              not days. Here&apos;s how we make it happen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10 mb-4`}>
                    <step.icon className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">Step {index + 1}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{step.title}</h2>
                  <p className="text-text-secondary mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="p-6 rounded-2xl bg-bg-surface border border-white/5">
                    <div className="text-sm text-text-secondary mb-2">Example:</div>
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-5 border border-white/5`}>
                      <p className="text-white">{step.example}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { q: 'Do I need to know SQL?', a: 'Not at all! Just describe your app in plain English. We handle all the technical details.' },
                { q: 'What databases are supported?', a: 'PostgreSQL, MySQL, SQLite, and SQL Server. Plus framework-specific formats like Prisma and Django.' },
                { q: 'Can I edit the generated schema?', a: 'Absolutely! You get full access to the SQL and can modify it however you like.' },
                { q: 'Is my data secure?', a: 'We don\'t store your actual data — just the schema structure. Everything is encrypted in transit and at rest.' },
              ].map((faq, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-6 rounded-xl bg-bg-surface border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-text-secondary">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2026 DbCraft. Built with AI for developers.
          </p>
        </div>
      </footer>
    </main>
  )
}
