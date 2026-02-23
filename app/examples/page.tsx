'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Database, Server, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Examples() {
  const [copied, setCopied] = useState<string | null>(null)

  const examples = [
    {
      name: 'SaaS Platform',
      description: 'Multi-tenant SaaS with teams, subscriptions, and billing',
      tables: ['users', 'teams', 'subscriptions', 'invoices', 'api_keys'],
      sql: `-- SaaS Platform Schema
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    owner_id UUID REFERENCES users(id),
    plan VARCHAR(50) DEFAULT 'free'
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(id),
    status VARCHAR(50),
    current_period_end TIMESTAMP
);`
    },
    {
      name: 'E-Commerce',
      description: 'Online store with products, orders, and inventory',
      tables: ['customers', 'products', 'orders', 'order_items', 'inventory'],
      sql: `-- E-Commerce Schema
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255)
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    stock INTEGER DEFAULT 0
);

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id UUID REFERENCES customers(id),
    total DECIMAL(10,2),
    status VARCHAR(50)
);`
    },
    {
      name: 'Social Network',
      description: 'User profiles, posts, comments, and follows',
      tables: ['users', 'posts', 'comments', 'likes', 'follows'],
      sql: `-- Social Network Schema
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    bio TEXT
);

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE follows (
    follower_id UUID REFERENCES users(id),
    following_id UUID REFERENCES users(id),
    PRIMARY KEY (follower_id, following_id)
);`
    },
    {
      name: 'Booking System',
      description: 'Resource booking with calendar and payments',
      tables: ['resources', 'bookings', 'customers', 'payments', 'reviews'],
      sql: `-- Booking System Schema
CREATE TABLE resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    hourly_rate DECIMAL(10,2)
);

CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_id UUID REFERENCES resources(id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    status VARCHAR(50)
);`
    },
    {
      name: 'Learning Platform',
      description: 'Courses, lessons, enrollments, and progress',
      tables: ['courses', 'lessons', 'enrollments', 'progress', 'certificates'],
      sql: `-- Learning Platform Schema
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id UUID
);

CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES courses(id),
    title VARCHAR(255),
    duration INTEGER
);

CREATE TABLE enrollments (
    user_id UUID,
    course_id UUID REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, course_id)
);`
    },
    {
      name: 'Marketplace',
      description: 'Multi-vendor marketplace with listings and reviews',
      tables: ['sellers', 'listings', 'orders', 'reviews', 'categories'],
      sql: `-- Marketplace Schema
CREATE TABLE sellers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_name VARCHAR(255) NOT NULL,
    rating DECIMAL(2,1) DEFAULT 5.0
);

CREATE TABLE listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_id UUID REFERENCES sellers(id),
    title VARCHAR(255),
    price DECIMAL(10,2)
);

CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id UUID REFERENCES listings(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT
);`
    }
  ]

  const handleCopy = (sql: string, name: string) => {
    navigator.clipboard.writeText(sql)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

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
              Example Schemas
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
              See what DbCraft can generate. These are real schemas created from simple descriptions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 bg-bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {examples.map((example, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-white/5"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <h2 className="text-2xl font-bold text-white mb-2">{example.name}</h2>
                    <p className="text-text-secondary mb-4">{example.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {example.tables.map((table, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-bg-elevated text-xs text-text-secondary border border-white/5">
                          {table}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="rounded-xl bg-bg-primary border border-white/5 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-bg-elevated border-b border-white/5">
                        <span className="text-xs text-text-secondary font-mono">schema.sql</span>
                        <button 
                          onClick={() => handleCopy(example.sql, example.name)}
                          className="flex items-center gap-1 text-xs text-accent-cyan hover:text-white transition-colors"
                        >
                          {copied === example.name ? (
                            <><Check className="w-3 h-3" /> Copied</>
                          ) : (
                            <><Copy className="w-3 h-3" /> Copy</>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs sm:text-sm font-mono text-text-secondary overflow-x-auto">
                        {example.sql}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
              Build Your Own
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-text-secondary mb-8">
              These are just examples. Describe your unique app and get a custom schema in seconds.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold hover:opacity-90 transition-all"
              >
                <Server className="w-5 h-5" />
                Generate Your Schema
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2024 DbCraft. Built with AI for developers.
          </p>
        </div>
      </footer>
    </main>
  )
}
