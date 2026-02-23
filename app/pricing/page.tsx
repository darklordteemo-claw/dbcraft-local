'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Database, Check, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for trying out and small projects',
      icon: Sparkles,
      features: [
        '3 schemas total (lifetime)',
        'SQL export only',
        'Basic ERD diagrams',
        'Community support',
        'No credit card required'
      ],
      cta: 'Get Started',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Starter',
      price: '₹599',
      period: '/month',
      description: 'For solo developers and indie hackers',
      icon: Zap,
      features: [
        '15 schemas per month',
        'All export formats (SQL, Prisma, Django, Rails)',
        'High-resolution diagrams',
        'PNG & SVG exports',
        'Email support',
        '7-day free trial'
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-accent-cyan to-blue-500'
    },
    {
      name: 'Pro',
      price: '₹1299',
      period: '/month',
      description: 'For teams, agencies, and power users',
      icon: Database,
      features: [
        '35 schemas per month',
        'Everything in Starter',
        'Team collaboration (5 members)',
        'API access',
        'Version history',
        'Priority support',
        'White-label exports'
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-accent-purple to-pink-500'
    }
  ]

  const faqs = [
    {
      q: 'Can I upgrade or downgrade anytime?',
      a: 'Yes! You can change your plan at any time. Upgrades take effect immediately, downgrades at the end of your billing cycle.'
    },
    {
      q: 'What happens if I exceed my schema limit?',
      a: 'You\'ll need to upgrade to generate more schemas. Your existing schemas remain accessible forever.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'Yes, we offer a 7-day money-back guarantee on all paid plans. No questions asked.'
    },
    {
      q: 'Is there an annual discount?',
      a: 'Absolutely! Pay annually and get 2 months free (17% discount). That\'s ₹5999/year for Starter instead of ₹7188.'
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-b from-accent-cyan/10 to-bg-surface border-2 border-accent-cyan/50' : 'bg-bg-surface border border-white/5'} transition-all hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-accent-cyan' : 'text-text-secondary'}`} />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:opacity-90' : 'bg-bg-elevated border border-white/10 text-white hover:bg-white/5'}`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Annual Pricing Note */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-text-secondary">
              🎉 <span className="text-white font-semibold">Save 17%</span> with annual billing. 
              Starter: ₹4999/year (₹5999 for monthly) • 
              Pro: ₹10999/year (₹15588 for monthly)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white text-center mb-12">
              Feature Comparison
            </motion.h2>
            <motion.div variants={fadeInUp} className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-text-secondary font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-text-secondary font-medium">Free</th>
                    <th className="text-center py-4 px-4 text-accent-cyan font-medium">Starter</th>
                    <th className="text-center py-4 px-4 text-accent-purple font-medium">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Schemas per month', '3 total', '15', '35'],
                    ['Export formats', 'SQL only', 'All formats', 'All formats'],
                    ['Diagram quality', 'Basic', 'High-res', 'High-res'],
                    ['Export formats', 'SQL', 'SQL + All frameworks', 'SQL + All frameworks'],
                    ['Team members', '1', '1', '5'],
                    ['Version history', '—', '—', '✓'],
                    ['API access', '—', '—', '✓'],
                    ['Priority support', '—', 'Email', 'Priority'],
                    ['White-label', '—', '—', '✓'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 px-4 text-white">{row[0]}</td>
                      <td className="py-4 px-4 text-center text-text-secondary">{row[1]}</td>
                      <td className="py-4 px-4 text-center text-text-secondary">{row[2]}</td>
                      <td className="py-4 px-4 text-center text-text-secondary">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg-surface/30">
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
              {faqs.map((faq, index) => (
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
            © 2026 DbCraft. Questions? Contact us at hello@dbcraft.local
          </p>
        </div>
      </footer>
    </main>
  )
}
