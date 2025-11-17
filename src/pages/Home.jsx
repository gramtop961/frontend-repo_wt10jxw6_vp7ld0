import React from 'react'
import Spline from '@splinetool/react-spline'
import Layout from '../components/Layout'
import { Button, Card, Badge } from '../components/ui'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center py-10 md:py-20">
          <div>
            <Badge>Holistic Wellness</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-900 mt-4">Ayurvedic Pharmacy & Wellness</h1>
            <p className="mt-4 text-slate-700 max-w-prose">Experience nature-backed remedies, expert consultations, and traditional products for a balanced life.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/products"><Button>Shop Products</Button></Link>
              <Link to="/services"><Button className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Book Consultation</Button></Link>
            </div>
          </div>
          <div className="h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-emerald-100 bg-white">
            <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-900">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[1,2,3,4].map(i => (
            <Card key={i} className="p-4">
              <div className="h-36 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg" />
              <h3 className="mt-3 font-semibold">Herbal Product {i}</h3>
              <p className="text-sm text-slate-600">Natural ingredients. Gentle, effective care.</p>
              <button className="mt-3 text-sm text-emerald-700 hover:underline">View</button>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Authentic Ayurveda', text: 'Sourced from trusted manufacturers and traditional formulary.' },
          { title: 'Expert Guidance', text: 'Licensed practitioners for personalized care and prescriptions.' },
          { title: 'Traditional Services', text: 'Nakshatra readings, rituals, and auspicious time selection.' },
        ].map((s, i) => (
          <Card key={i} className="p-6">
            <h3 className="font-semibold text-emerald-900">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{s.text}</p>
          </Card>
        ))}
      </section>
    </Layout>
  )
}
