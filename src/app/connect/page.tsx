'use client';

import { useState } from 'react';

type NewsCategory = 'ALL' | 'PROPERTY' | 'BUSINESS' | 'LIFESTYLE' | 'COMMUNITY';

export default function Connect() {
  const [category, setCategory] = useState<NewsCategory>('ALL');

  // Mock news data
  const news = [
    {
      id: 1,
      title: 'New Development Project Announced in Dublin',
      category: 'PROPERTY',
      author: 'Property News',
      date: '2025-08-27',
      image: '/placeholder.jpg',
      excerpt: 'Major development project set to transform Dublin\'s skyline with sustainable architecture.',
    },
    {
      id: 2,
      title: 'Local Business Growth Hits Record High',
      category: 'BUSINESS',
      author: 'Business Weekly',
      date: '2025-08-26',
      image: '/placeholder.jpg',
      excerpt: 'Small businesses in the region show remarkable growth despite global challenges.',
    },
    {
      id: 3,
      title: 'Community Festival Returns This Autumn',
      category: 'COMMUNITY',
      author: 'Community News',
      date: '2025-08-25',
      image: '/placeholder.jpg',
      excerpt: 'Annual community festival announces exciting lineup of events and activities.',
    },
    // Add more mock news as needed
  ];

  // Mock professionals data
  const professionals = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Real Estate Agent',
      company: 'Premier Properties',
      verified: true,
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Lisa Chen',
      role: 'Interior Designer',
      company: 'Modern Spaces',
      verified: true,
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      role: 'Property Developer',
      company: 'Urban Development Co.',
      verified: true,
      image: '/placeholder.jpg',
    },
    // Add more mock professionals as needed
  ];

  // Filter news based on selected category
  const filteredNews = news.filter(item => 
    category === 'ALL' || item.category === category
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-greia-cold-start to-greia-cold-end py-20">
        <div className="container">
          <h1 className="hero-title text-5xl mb-6">
            Connect & Stay Informed
          </h1>
          <p className="text-white/90 text-xl">
            Latest news, updates, and networking opportunities in your community.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="h-section text-3xl">Latest News</h2>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as NewsCategory)}
              className="rounded-button border border-gray-300 px-4 py-2"
            >
              <option value="ALL">All Categories</option>
              <option value="PROPERTY">Property</option>
              <option value="BUSINESS">Business</option>
              <option value="LIFESTYLE">Lifestyle</option>
              <option value="COMMUNITY">Community</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="card overflow-hidden">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.author}</span>
                    <button className="text-greia-cold-start font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="h-section text-3xl mb-8">Featured Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((pro) => (
              <div key={pro.id} className="card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{pro.name}</h3>
                      {pro.verified && (
                        <span className="text-blue-500">✓</span>
                      )}
                    </div>
                    <p className="text-gray-600">{pro.role}</p>
                    <p className="text-sm text-gray-500">{pro.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="button-primary bg-greia-cold-start">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="h-section text-4xl mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Connect with professionals, stay updated with local news, and be part of a growing community.
          </p>
          <button className="button-primary bg-greia-warm-start">
            Create Account
          </button>
        </div>
      </section>
    </>
  );
}