'use client';

import { useState } from 'react';

type LifestyleCategory = 'ALL' | 'DINING' | 'ENTERTAINMENT' | 'TRAVEL' | 'WELLNESS';

export default function Lifestyle() {
  const [category, setCategory] = useState<LifestyleCategory>('ALL');

  // Mock lifestyle data
  const experiences = [
    {
      id: 1,
      title: 'Fine Dining Experience',
      category: 'DINING',
      venue: 'Le Petit Bistro',
      price: 120,
      rating: 4.8,
      reviews: 156,
      description: 'Experience exquisite French cuisine in an intimate setting.',
      image: '/placeholder.jpg',
      location: 'Dublin City Center',
    },
    {
      id: 2,
      title: 'City Walking Tour',
      category: 'TRAVEL',
      venue: 'Dublin Heritage Tours',
      price: 45,
      rating: 4.9,
      reviews: 234,
      description: 'Discover hidden gems and historical landmarks with expert guides.',
      image: '/placeholder.jpg',
      location: 'Dublin',
    },
    {
      id: 3,
      title: 'Luxury Spa Day',
      category: 'WELLNESS',
      venue: 'Urban Retreat Spa',
      price: 180,
      rating: 4.7,
      reviews: 89,
      description: 'Full day of relaxation with premium treatments and facilities.',
      image: '/placeholder.jpg',
      location: 'South Dublin',
    },
    // Add more mock experiences as needed
  ];

  // Filter experiences based on selected category
  const filteredExperiences = experiences.filter(exp => 
    category === 'ALL' || exp.category === category
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-greia-warm-start to-greia-warm-end py-20">
        <div className="container">
          <h1 className="hero-title text-5xl mb-6">
            Discover Lifestyle Experiences
          </h1>
          <p className="text-white/90 text-xl">
            Curated experiences for dining, entertainment, travel, and wellness.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            {['ALL', 'DINING', 'ENTERTAINMENT', 'TRAVEL', 'WELLNESS'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat as LifestyleCategory)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  category === cat
                    ? 'bg-greia-warm-start text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'ALL' ? 'All Experiences' : cat.charAt(0) + cat.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((exp) => (
              <div key={exp.id} className="card overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{exp.category}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.venue}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★</span>
                      <span>{exp.rating}</span>
                      <span className="text-gray-400">({exp.reviews})</span>
                    </div>
                    <span className="font-bold">€{exp.price}</span>
                  </div>
                  <button className="button-primary bg-greia-warm-start w-full mt-4">
                    Book Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="h-section text-3xl mb-12">Curated Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Date Night', icon: '💑' },
              { title: 'Weekend Getaways', icon: '🏖️' },
              { title: 'Family Fun', icon: '👨‍👩‍👧‍👦' },
              { title: 'Local Favorites', icon: '⭐' },
            ].map((collection) => (
              <div key={collection.title} className="card p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{collection.icon}</div>
                <h3 className="font-semibold text-xl">{collection.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="h-section text-4xl mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive personalized lifestyle recommendations and exclusive offers.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-button border border-gray-300 px-6 py-3 w-full max-w-md"
            />
            <button className="button-primary bg-greia-warm-start whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}