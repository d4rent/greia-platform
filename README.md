# GREIA Platform

GREIA is a comprehensive "life's operating system" that connects property, business, services, and community into one seamless platform. Built with modern web technologies and focused on providing an exceptional user experience.

## Features

- **Properties**: Browse and list properties for rent or sale
- **Connect**: Stay updated with local news and network with professionals
- **Services**: Find and book verified professional services
- **Lifestyle**: Discover local experiences, dining, and entertainment

## Tech Stack

- **Frontend**: Next.js 13 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **State Management**: Zustand + TanStack Query
- **Database**: Prisma with PostgreSQL
- **Payments**: Stripe Integration
- **Authentication**: Built-in auth system

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/d4rent/greia-platform.git
   cd greia-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables in `.env.local`

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
greia-platform/
├── src/
│   ├── app/                 # Next.js 13 App Router pages
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions and configurations
│   ├── stores/             # Zustand state management
│   └── styles/             # Global styles and Tailwind config
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── package.json           # Project dependencies and scripts
```

## Design System

The platform uses a custom design system with:
- Custom gradients (Warm & Cold themes)
- GREIA Poster font for headlines
- Consistent spacing and component styling
- Responsive grid layouts
- Accessible UI components

## Environment Variables

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `STRIPE_SECRET_KEY`: Stripe API secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook signing secret
- `AWS_S3_BUCKET`: S3 bucket for media storage
- `JWT_SECRET`: Secret for JWT authentication
- See `.env.example` for all required variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is proprietary software. All rights reserved.

## Support

For support or inquiries, please contact support@greia.com