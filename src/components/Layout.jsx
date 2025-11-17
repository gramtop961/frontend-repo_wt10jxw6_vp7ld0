import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from './ui'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/location', label: 'Location' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-50 to-amber-50 text-slate-800">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-emerald-800">
            <icons.Leaf className="w-6 h-6" /> AyurVeda
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <Link key={n.to} to={n.to} className="hover:text-emerald-700 transition">{n.label}</Link>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu"><icons.Menu /></button>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {nav.map(n => (
              <Link key={n.to} to={n.to} className="block py-2 border-b border-emerald-100" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-emerald-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold text-emerald-800"><icons.Leaf className="w-5 h-5"/> AyurVeda</div>
            <p className="text-sm mt-2 text-slate-600">Natural remedies, traditional wisdom, and trusted care.</p>
          </div>
          <div>
            <p className="font-medium">Quick Links</p>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {nav.map(n => <Link key={n.to} to={n.to} className="hover:text-emerald-700">{n.label}</Link>)}
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Contact</p>
            <p className="text-sm flex items-center gap-2"><icons.Phone className="w-4 h-4"/> +1 234 567 890</p>
            <p className="text-sm flex items-center gap-2"><icons.Mail className="w-4 h-4"/> hello@ayurveda.example</p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200"><icons.Facebook className="w-4 h-4"/></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200"><icons.Instagram className="w-4 h-4"/></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200"><icons.Twitter className="w-4 h-4"/></a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} AyurVeda. All rights reserved.</div>
      </footer>
    </div>
  )
}
