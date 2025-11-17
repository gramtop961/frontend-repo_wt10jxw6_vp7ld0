import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../lib/api'
import { Card, Badge } from '../components/ui'

const CATS = [
  'Herbal Wisdom',
  'Healing Through Ayurveda',
  'Power of Nature',
  'Ayurveda for Daily Life',
]

export default function Blog() {
  const [category, setCategory] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => { api.blog(category || undefined).then(setPosts).catch(()=>setPosts([])) }, [category])

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Blog</h1>
        <div className="flex flex-wrap gap-3 mt-4">
          <button onClick={()=>setCategory('')} className={`px-3 py-1 rounded-full text-sm border ${category===''? 'bg-emerald-600 text-white border-emerald-600':'border-emerald-200'}`}>All</button>
          {CATS.map(c => (
            <button key={c} onClick={()=>setCategory(c)} className={`px-3 py-1 rounded-full text-sm border ${category===c? 'bg-emerald-600 text-white border-emerald-600':'border-emerald-200'}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts.map(p => (
            <Card key={p._id} className="p-4">
              <div className="h-36 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
              <div className="mt-2"><Badge>{p.category}</Badge></div>
            </Card>
          ))}
          {posts.length===0 && <div className="col-span-full text-slate-600 text-center">No posts yet.</div>}
        </div>
      </section>
    </Layout>
  )
}
