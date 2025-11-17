import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../lib/api'
import { Button, Card, Input } from '../components/ui'

export default function Services() {
  const [services, setServices] = useState({})
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', mode: 'in-person', service: 'ayurvedic', message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => { api.services().then(setServices) }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await api.bookConsultation(form)
      setStatus('Request received. We will contact you shortly.')
      setForm({ full_name: '', email: '', phone: '', mode: 'in-person', service: 'ayurvedic', message: '' })
    } catch (e) { setStatus('Something went wrong. Please try again.') }
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Services</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {Object.entries(services).map(([key, s]) => (
            <Card key={key} className="p-6">
              <h3 className="font-semibold text-emerald-900">{s.title}</h3>
              <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
                {s.items.map((i, idx) => <li key={idx}>{i}</li>)}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-6 mt-8">
          <h2 className="font-semibold text-emerald-900">Book a Consultation</h2>
          <form className="grid md:grid-cols-2 gap-4 mt-4" onSubmit={submit}>
            <Input placeholder="Full name" value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} required />
            <Input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <Input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm" value={form.mode} onChange={e=>setForm({...form, mode:e.target.value})}>
              <option value="in-person">In-person</option>
              <option value="online">Online</option>
            </select>
            <select className="rounded-md border border-emerald-200 px-3 py-2 text-sm" value={form.service} onChange={e=>setForm({...form, service:e.target.value})}>
              <option value="ayurvedic">Ayurvedic</option>
              <option value="nakshatra">Nakshatra</option>
            </select>
            <Input className="md:col-span-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
            <Button className="md:col-span-2" type="submit">Submit</Button>
          </form>
          {status && <p className="text-sm text-emerald-700 mt-3">{status}</p>}
        </Card>
      </section>
    </Layout>
  )
}
