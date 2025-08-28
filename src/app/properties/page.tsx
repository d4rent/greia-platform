'use client';

import { useState } from 'react';

type PropertyType = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'LAND';
type PriceRange = 'ALL' | '0-1000' | '1000-2000' | '2000-3000' | '3000+';

export default function Properties() {
  const [propertyType, setPropertyType] = useState<PropertyType>('ALL');
  const [priceRange, setPriceRange] = useState<PriceRange>('ALL');

  // Mock properties data
  const properties = [
    {
      id: 1,
      title: 'Modern City Apartment',
      type: 'RESIDENTIAL',
      price: 2500,
      location: 'Dublin City Center',
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      type: 'COMMERCIAL',
      price: 4000,
      location: 'Business District',
      area: 200,
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Development Land',
      type: 'LAND',
      price: 150000,
      location: 'Suburban Area',
      area: 1000,
      image: '/placeholder.jpg',
    },
    // Add more mock properties as needed
  ];

  // Filter properties based on selected filters
  const filteredProperties = properties.filter(property => {
    const matchesType = propertyType === 'ALL' || property.type === propertyType;
    let matchesPrice = true;
    
    if (priceRange !== 'ALL') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        matchesPrice = property.price >= min && property.price < max;
      } else {
        matchesPrice = property.price >= min;
      }
    }

    return matchesType && matchesPrice;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-greia-cold-start to-greia-cold-end py-20">
        <div className="container">
          <h1 className="hero-title text-5xl mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-white/90 text-xl">
            Browse our curated selection of properties for rent and sale.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                className="rounded-button border border-gray-300 px-4 py-2"
              >
                <option value="ALL">All Types</option>
                <option value="RESIDENTIAL">Residential</option>
                <option value="COMMERCIAL">Commercial</option>
                <option value="LAND">Land</option>
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
                <option value="0-1000">€0 - €1,000</option>
                <option value="1000-2000">€1,000 - €2,000</option>
                <option value="2000-3000">€2,000 - €3,000</option>
                <option value="3000+">€3,000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="content">
                  <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    {property.type === 'RESIDENTIAL' && (
                      <>
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                      </>
                    )}
                    <span>{property.area}m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                      €{property.price.toLocaleString()}{property.type !== 'LAND' ? '/mo' : ''}
                    </span>
                    <button className="button-primary bg-greia-cold-start">
                      View Details
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
            List Your Property
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Are you a property owner or agent? List your property on GREIA and reach thousands of potential clients.
          </p>
          <button className="button-primary bg-greia-warm-start">
            Start Listing
          </button>
        </div>
      </section>
    </>
  );
}