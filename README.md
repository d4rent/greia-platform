# GREIA Platform

A comprehensive life's operating system for property, services, lifestyle and social connectivity.

## Project Structure

```
greia/
├── apps/
│   ├── web/               # Next.js/React (S3 + CloudFront)
│   │   ├── src/
│   │   ├── public/
│   │   ├── next.config.js
│   │   └── package.json
│   ├── api/               # Node (NestJS) on Elastic Beanstalk
│   │   ├── src/
│   │   │   └── modules/
│   │   │       ├── auth/
│   │   │       ├── users/
│   │   │       ├── businesses/
│   │   │       └── listings/
│   │   ├── prisma/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── worker/           # Background jobs
│       ├── src/
│       ├── Dockerfile
│       └── package.json
├── packages/
│   ├── shared/          # DTOs, validators, types
│   ├── ui/             # Design system
│   └── utils/          # Common helpers
└── infra/
    ├── eb/             # Elastic Beanstalk config
    ├── cf/             # CloudFront & S3 deployment
    └── terraform/      # Infrastructure as Code
```

## Core Features

### Properties
- Real estate listings (sale, rent, commercial)
- Verified agents and documentation
- Property search and filtering

### Connect
- Built-in news from trusted sources
- Social connectivity features
- Messaging system

### Services
- Directory of verified professionals
- Booking and scheduling system
- Professional portfolio management

### Lifestyle
- Car rentals
- Restaurant bookings
- City tours
- Lifestyle services

## Tech Stack

- Frontend: Next.js + TypeScript
- Backend: Node.js (NestJS)
- Database: Amazon Aurora (PostgreSQL)
- Search: Amazon OpenSearch
- Cache/Queues: Redis, SQS/SNS
- Authentication: Cognito/JWT
- Storage: S3 + CloudFront
- Deployment: AWS (Elastic Beanstalk)

## Getting Started

Documentation for setup and development coming soon.

## License

Copyright © 2025 GREIA. All rights reserved.