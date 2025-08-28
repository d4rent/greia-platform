'use client';

import { useState } from 'react';

type ServiceCategory = 'ALL' | 'CREATIVE' | 'ENGINEERING' | 'FINANCIAL' | 'TRADES';
type PriceRange = 'ALL' | '0-100' | '100-500' | '500-1000' | '1000+';

export default function Services() {
  const [category, setCategory] = useState<ServiceCategory>('ALL');
  const [priceRange, setPriceRange] = useState<PriceRange>('ALL');

  // Mock services data
  const services = [
    {
      id: 1,
      title: 'Interior Design Consultation',
      category: 'CREATIVE',
      price: 150,
      provider: 'Sarah Johnson',
      rating: 4.8,
      reviews: 24,
      description: 'Professional interior design consultation for residential and commercial spaces.',
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Structural Engineering Assessment',
      category: 'ENGINEERING',
      price: 800,
      provider: 'Michael Chen',
      rating: 4.9,
      reviews: 16,
      description: 'Comprehensive structural assessment and reporting for buildings.',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Financial Planning Session',
      category: 'FINANCIAL',
      price: 250,
      provider: 'Emma Thompson',
      rating: 4.7,
      reviews: 31,
      description: 'Personal financial planning and investment strategy consultation.',
      image: '/placeholder.jpg',
    },
    // Add more mock services as needed
  ];

  // Filter services based on selected filters
  const filteredServices = services.filter(service => {
    const matchesCategory = category === 'ALL' || service.category === category;
    let matchesPrice = true;
    
    if (priceRange !== 'ALL') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        matchesPrice = service.price >= min && service.price < max;
      } else {
        matchesPrice = service.price >= min;
      }
    }

    return matchesCategory && matchesPrice;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-greia-warm-start to-greia-warm-end py-20">
        <div className="container">
          <h1 className="hero-title text-5xl mb-6">
            Professional Services Directory
          </h1>
          <p className="text-white/90 text-xl">
            Connect with verified professionals across various industries.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ServiceCategory)}
                className="rounded-button border border-gray-300 px-4 py-2"
              >
                <option value="ALL">All Categories</option>
                <option value="CREATIVE">Creative</option>
                <option value="ENGINEERING">Engineering</option>
                <option value="FINANCIAL">Financial</option>
                <option value="TRADES">Trades</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as PriceRange)}
                className="rounded-button border border-gray-300 px-4 py-2"
              >
                <option value="ALL">Any Price</option>
                <option value="0-100">€0 - €100</option>
                <option value="100-500">€100 - €500</option>
                <option value="500-1000">€500 - €1,000</option>
                <option value="1000+">€1,000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="card overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                      <p className="text-gray-600">{service.provider}</p>
                    </div>
                    <span className="text-xl font-bold">€{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{service.rating}</span>
                      <span className="text-gray-400 ml-1">({service.reviews})</span>
                    </div>
                    <button className="button-primary bg-greia-warm-start">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="h-section text-4xl mb-6">
            Are You a Professional?
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Join GREIA's professional network and connect with clients looking for your expertise.
          </p>
          <button className="button-primary bg-greia-cold-start">
            Join as Professional
          </button>
        </div>
      </section>
    </>
  );
}