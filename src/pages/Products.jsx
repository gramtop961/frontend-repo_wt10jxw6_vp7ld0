import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../lib/api'
import { Input, Button, Card, Badge } from '../components/ui'

export default function Products() {
  const [categories, setCategories] = useState({})
  const [list, setList] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [subcategory, setSubcategory] = useState('')

  useEffect(() => { api.categories().then(setCategories) }, [])
  useEffect(() => { api.products({ q, category, subcategory }).then(setList).catch(() => setList([])) }, [q, category, subcategory])

  const categoryNames = Object.keys(categories)
  const subcats = category ? categories[category] : []

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Products</h1>
        <div className="mt-6 grid md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2"><Input placeholder="Search products" value={q} onChange={(e)=>setQ(e.target.value)} /></div>
          <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm" value={category} onChange={e=>{setCategory(e.target.value); setSubcategory('')}}>
            <option value="">All Categories</option>
            {categoryNames.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm" value={subcategory} onChange={e=>setSubcategory(e.target.value)} disabled={!category}>
            <option value="">All Subcategories</option>
            {subcats?.map(sc => <option key={sc} value={sc}>{sc}</option>)}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {list.map(p => (
            <Card key={p._id} className="p-4">
              <div className="h-40 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2">{p.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-semibold text-emerald-900">${p.price?.toFixed(2)}</span>
                <Badge>{p.subcategory || p.category}</Badge>
              </div>
              <Button className="mt-3 w-full">Add to cart</Button>
            </Card>
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center text-slate-600">No products found.</div>
          )}
        </div>
      </section>
    </Layout>
  )
}
