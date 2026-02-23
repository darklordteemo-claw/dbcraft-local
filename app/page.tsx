'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Database, 
  Zap, 
  Code2, 
  Share2, 
  ArrowRight,
  Check,
  Sparkles,
  Layout,
  Server,
  FileCode,
  Github,
  Twitter,
  MessageCircle,
  ChevronRight,
  Play
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DbCraft</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-text-secondary hover:text-white transition-colors">How it works</a>
              <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</a>
              <a href="#examples" className="text-sm text-text-secondary hover:text-white transition-colors">Examples</a>
              <a href="#pricing" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</a>
            </div>
            <button className="px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-text-secondary">AI-Powered Database Design</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Generate Database Schemas
              <br />
              <span className="gradient-text">In Seconds, Not Days</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary mb-10"
            >
              Describe your app idea, get production-ready SQL schemas, visual diagrams, 
              and framework-specific migrations. No database expertise required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2">
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl bg-bg-surface border border-white/10 text-white font-medium hover:bg-bg-elevated transition-all flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
            >
              {[
                { value: '10K+', label: 'Schemas Generated' },
                { value: '500+', label: 'Developers' },
                { value: '99.9%', label: 'Accuracy' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Flow Diagram Section */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How It Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary max-w-2xl mx-auto">
              From idea to production-ready database in four simple steps
            </motion.p>
          </motion.div>

          {/* Flow Steps */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: MessageCircle,
                step: '01',
                title: 'Describe',
                description: 'Tell us about your app in plain English. What entities? What relationships?',
                color: 'from-accent-cyan to-blue-500'
              },
              {
                icon: Sparkles,
                step: '02',
                title: 'Generate',
                description: 'Our AI analyzes your requirements and creates the perfect schema structure.',
                color: 'from-accent-purple to-pink-500'
              },
              {
                icon: FileCode,
                step: '03',
                title: 'Export',
                description: 'Get SQL, Prisma, Django models, and visual ERD diagrams instantly.',
                color: 'from-pink-500 to-orange-500'
              },
              {
                icon: Server,
                step: '04',
                title: 'Deploy',
                description: 'One-click deploy to Supabase, Railway, or download and self-host.',
                color: 'from-orange-500 to-accent-cyan'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" style={{ background: `linear-gradient(135deg, ${item.color.includes('cyan') ? '#00d4ff' : item.color.includes('purple') ? '#a855f7' : '#f472b6'}20, transparent)` }} />
                <div className="relative p-6 rounded-2xl bg-bg-surface border border-white/5 hover:border-white/10 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-mono text-accent-cyan mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What You Get
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to go from idea to production database
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Database,
                title: 'Production-Ready SQL',
                description: 'Get optimized SQL schemas for PostgreSQL, MySQL, and SQLite with proper indexes and constraints.',
                features: ['CREATE TABLE statements', 'Indexes & constraints', 'Foreign keys', 'Trigger templates']
              },
              {
                icon: Layout,
                title: 'Visual ERD Diagrams',
                description: 'Beautiful entity-relationship diagrams you can share with your team or embed in documentation.',
                features: ['Interactive SVG', 'Export PNG/SVG', 'Table relationships', 'Auto-layout']
              },
              {
                icon: Code2,
                title: 'Framework Migrations',
                description: 'Skip writing boilerplate. Get migrations for Prisma, Django, Rails, and more.',
                features: ['Prisma schema', 'Django models', 'Rails migrations', 'TypeORM entities']
              },
              {
                icon: Share2,
                title: 'Team Collaboration',
                description: 'Share schemas with your team, add comments, and track versions over time.',
                features: ['Share links', 'Version history', 'Team comments', 'Export collections']
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="group p-8 rounded-2xl bg-bg-surface border border-white/5 hover:border-accent-cyan/30 transition-all hover:bg-bg-elevated"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:from-accent-cyan/30 group-hover:to-accent-purple/30 transition-all">
                  <feature.icon className="w-7 h-7 text-accent-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 lg:py-32 bg-bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              See It In Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary">
              Try it right now — no signup required
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl bg-bg-surface border border-white/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-text-secondary font-mono">dbcraft generate</span>
              </div>
              
              {/* Demo Content */}
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm text-text-secondary mb-2">Describe your app:</label>
                  <div className="p-4 rounded-xl bg-bg-primary border border-white/5 font-mono text-sm text-text-secondary">
                    &quot;I want to build a food delivery app where customers can browse restaurants, 
                    place orders, and track delivery. Restaurants manage menus.&quot;
                  </div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center animate-pulse">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="rounded-xl bg-bg-primary border border-accent-cyan/20 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-bg-elevated border-b border-white/5">
                    <span className="text-xs text-text-secondary font-mono">schema.sql</span>
                    <span className="text-xs text-accent-cyan">Generated in 2.3s</span>
                  </div>
                  <pre className="p-4 text-xs sm:text-sm font-mono text-text-secondary overflow-x-auto">
{`-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Restaurants table
CREATE TABLE restaurants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    address TEXT,
    owner_id UUID REFERENCES users(id)
);`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built For Every Use Case
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary">
              From simple apps to complex platforms
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: 'SaaS Platform', desc: 'Users, subscriptions, teams, billing', icon: Zap },
              { name: 'E-Commerce', desc: 'Products, orders, inventory, payments', icon: Database },
              { name: 'Social Network', desc: 'Users, posts, comments, follows', icon: Share2 },
              { name: 'Booking System', desc: 'Resources, bookings, calendar, payments', icon: Layout },
              { name: 'Learning Platform', desc: 'Courses, lessons, progress, certificates', icon: Code2 },
              { name: 'Marketplace', desc: 'Sellers, listings, orders, reviews', icon: Server },
            ].map((example, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="group p-6 rounded-xl bg-bg-surface border border-white/5 hover:border-accent-cyan/30 transition-all cursor-pointer hover:bg-bg-elevated"
              >
                <example.icon className="w-8 h-8 text-accent-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-1">{example.name}</h3>
                <p className="text-sm text-text-secondary">{example.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Simple Pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary">
              Start free, scale as you grow
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: 'Free',
                price: '₹0',
                period: 'forever',
                description: 'Perfect for trying out',
                features: ['3 schemas total', 'SQL export only', 'Basic diagrams', 'Community support'],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Starter',
                price: '₹599',
                period: '/month',
                description: 'For solo developers',
                features: ['15 schemas/month', 'All export formats', 'High-res diagrams', 'Email support'],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Pro',
                price: '₹1299',
                period: '/month',
                description: 'For teams & agencies',
                features: ['35 schemas/month', 'Team collaboration', 'API access', 'Priority support'],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-b from-accent-cyan/10 to-bg-surface border-accent-cyan/30' : 'bg-bg-surface border-white/5'} border-2 transition-all hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className={`w-4 h-4 ${plan.popular ? 'text-accent-cyan' : 'text-text-secondary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.popular ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:opacity-90' : 'bg-bg-elevated border border-white/10 text-white hover:bg-white/5'}`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-pink/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Join thousands of developers who ship faster with DbCraft. 
              Generate your first schema in seconds — free forever.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                View Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DbCraft</span>
              </div>
              <p className="text-text-secondary text-sm max-w-xs">
                AI-powered database schema generation for modern developers. 
                Ship faster, build better.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5">
            <p className="text-sm text-text-secondary">
              © 2024 DbCraft. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
