const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  categories: () => request('/api/categories'),
  products: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/products${qs ? `?${qs}` : ''}`);
  },
  reviews: () => request('/api/reviews'),
  addReview: (data) => request('/api/reviews', { method: 'POST', body: JSON.stringify(data) }),
  blog: (category) => request(`/api/blog${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  services: () => request('/api/services'),
  bookConsultation: (data) => request('/api/consultations', { method: 'POST', body: JSON.stringify(data) }),
  contact: (data) => request('/api/contact', { method: 'POST', body: JSON.stringify(data) }),
};

export { API_BASE };
