import React, { useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../lib/api'
import { Card, Input, Button } from '../components/ui'

export default function Contact() {
  const [form, setForm] = useState({ full_name: '', email: '', topic: 'general', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await api.contact({ ...form, channel: 'contact' })
      setStatus('Message sent successfully!')
      setForm({ full_name: '', email: '', topic: 'general', message: '' })
    } catch (e) { setStatus('Failed to send. Please try again.') }
  }

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Contact Us</h1>
        <Card className="p-6 mt-6">
          <form className="space-y-3" onSubmit={submit}>
            <Input placeholder="Full name" value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} required />
            <Input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm w-full" value={form.topic} onChange={e=>setForm({...form, topic:e.target.value})}>
              <option value="general">General</option>
              <option value="products">Products</option>
              <option value="consultation">Consultation</option>
              <option value="nakshatra">Nakshatra Services</option>
            </select>
            <textarea className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm" rows={5} placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <Button type="submit">Send</Button>
          </form>
          {status && <p className="text-sm text-emerald-700 mt-3">{status}</p>}
        </Card>
      </section>
    </Layout>
  )
}
