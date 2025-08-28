export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-greia-cold-start to-greia-cold-end" />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="hero-title text-6xl mb-6">
              Where property, work, and community connect
            </h1>
            <p className="text-white/90 text-xl mb-8">
              One digital home for living, working, and growing. GREIA is your operating system for modern life.
            </p>
            <div className="flex gap-4">
              <button className="button-primary bg-white text-greia-cold-start">
                Get Started
              </button>
              <button className="button-primary border-2 border-white bg-transparent">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container">
          <h2 className="h-section text-4xl mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Cards will be mapped here */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="property-card">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="content">
                  <h3 className="font-semibold text-xl mb-2">Premium Property {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Luxurious property in prime location with modern amenities.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">€2,500/mo</span>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="h-section text-4xl mb-12">Professional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Categories */}
            {[
              { title: 'Creative', icon: '🎨' },
              { title: 'Engineering', icon: '⚙️' },
              { title: 'Financial', icon: '💰' },
              { title: 'Trades', icon: '🔧' },
            ].map((service) => (
              <div key={service.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  Connect with verified professionals in {service.title.toLowerCase()} services.
                </p>
                <button className="button-primary bg-greia-warm-start w-full">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="h-section text-4xl mb-12">Community & Lifestyle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="aspect-video bg-greia-warm-start" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Local News</h3>
                <p className="text-gray-600">
                  Stay updated with the latest news and events in your community.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="aspect-video bg-greia-cold-start" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Events</h3>
                <p className="text-gray-600">
                  Discover and participate in local events and activities.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="aspect-video bg-greia-warm-end" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Lifestyle</h3>
                <p className="text-gray-600">
                  Explore restaurants, entertainment, and local attractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-greia-warm-start to-greia-warm-end">
        <div className="container text-center">
          <h2 className="hero-title text-5xl mb-6">
            Join the GREIA Community
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Connect with professionals, find your next property, and discover the best of your community.
          </p>
          <button className="button-primary bg-white text-greia-warm-start">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}