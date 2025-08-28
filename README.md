# GREIA OS

A beautifully designed life operating system connecting property, business, services, and community into one seamless experience.

## Vision

GREIA OS is built with a minimalist design philosophy, focusing on elegant user experiences and clean architecture. Our platform serves as the central hub for modern life, connecting:

- **Properties**: Curated real estate listings with verified documentation
- **Connect**: Integrated news and social features from trusted sources
- **Services**: Verified professional directory spanning multiple industries
- **Lifestyle**: Seamless access to car rentals, dining, and city experiences

## Tech Stack

- **Frontend**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Backend**: Node.js with NestJS/Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + Cookie-based sessions
- **Cloud**: AWS (S3, CloudFront, Elastic Beanstalk)
- **Payments**: Stripe (Core, Connect, Tax, Invoicing)

## Core Features

- Apple-inspired UI/UX with fluid animations and intuitive flows
- Professional verification system with document management
- Intelligent marketplace with smart matching algorithms
- Integrated messaging system for seamless communication
- Comprehensive booking and payment infrastructure
- Advanced search with location-aware capabilities

## Getting Started

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Architecture

The platform follows a clean, modular architecture:

```
greia-os/
├── apps/
│   ├── web/          # Next.js frontend
│   ├── api/          # Backend API
│   └── worker/       # Background jobs
├── packages/
│   ├── shared/       # Common types/utilities
│   ├── ui/           # Design system
│   └── config/       # Shared configuration
└── infrastructure/   # AWS/deployment configs
```

## Contributing

GREIA OS is currently in private development. Contact the team for contribution guidelines.

## License

Proprietary software. All rights reserved.