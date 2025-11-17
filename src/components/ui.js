import React from 'react'
import { Menu, Search, Leaf, Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export function Button({ className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${className}`}
      {...props}
    />
  )
}

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    />
  )
}

export function Card({ className = '', ...props }) {
  return (
    <div className={`rounded-xl border border-emerald-100 bg-white/80 backdrop-blur shadow-sm ${className}`} {...props} />
  )
}

export function Badge({ children }) {
  return <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs">{children}</span>
}

export const icons = { Menu, Search, Leaf, Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter }
