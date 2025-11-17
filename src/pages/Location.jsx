import React from 'react'
import Layout from '../components/Layout'
import { Card } from '../components/ui'

export default function Location() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Our Location</h1>
        <Card className="p-4 mt-6">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019026531778!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a2f5e3b1%3A0x7e6b4f5b5c9a0!2sHerbal%20Store!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-slate-700 mt-3">Find us at 123 Green Lane, Nature City. Open Mon-Sat 9am-7pm.</p>
        </Card>
      </section>
    </Layout>
  )
}
