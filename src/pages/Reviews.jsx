import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../lib/api'
import { Card, Button, Input } from '../components/ui'

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' })

  useEffect(() => { api.reviews().then(setReviews).catch(()=>setReviews([])) }, [])

  const submit = async (e) => {
    e.preventDefault()
    await api.addReview(form).catch(()=>{})
    const list = await api.reviews().catch(()=>[])
    setReviews(list)
    setForm({ name: '', rating: 5, comment: '' })
  }

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Customer Reviews</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            {reviews.map(r => (
              <Card key={r._id} className="p-4">
                <p className="font-medium">{r.name}</p>
                <p className="text-amber-600 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</p>
                <p className="text-sm text-slate-700 mt-1">{r.comment}</p>
              </Card>
            ))}
            {reviews.length===0 && <p className="text-slate-600">No reviews yet.</p>}
          </div>
          <Card className="p-6">
            <h2 className="font-semibold text-emerald-900">Leave a review</h2>
            <form className="space-y-3 mt-3" onSubmit={submit}>
              <Input placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm w-full" value={form.rating} onChange={e=>setForm({...form, rating:Number(e.target.value)})}>
                {[5,4,3,2,1].map(v => <option key={v} value={v}>{v} Stars</option>)}
              </select>
              <textarea className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm" rows={4} placeholder="Your feedback" value={form.comment} onChange={e=>setForm({...form, comment:e.target.value})} required />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
