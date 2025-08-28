'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}>
            Discover handpicked properties from our global network of trusted partners
          </Heading>
        </Stack>
      </Container>

      {/* Featured Properties */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8}>
            <Heading size="xl">Featured Properties</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <PropertyCard
                title="Modern Apartment in Dublin"
                location="Dublin City Centre, Ireland"
                price="€450,000"
                type="Apartment"
                beds={2}
                baths={2}
                sqft={850}
                agent="Sarah O'Connor"
                image="/images/property1.jpg"
              />
              <PropertyCard
                title="Luxury Villa in Barcelona"
                location="Eixample, Barcelona, Spain"
                price="€1,200,000"
                type="Villa"
                beds={4}
                baths={3}
                sqft={2100}
                agent="Emma Thompson"
                image="/images/property2.jpg"
              />
              <PropertyCard
                title="Penthouse in London"
                location="Canary Wharf, London, UK"
                price="£850,000"
                type="Penthouse"
                beds={3}
                baths={2}
                sqft={1200}
                agent="Michael Chen"
                image="/images/property3.jpg"
              />
            </SimpleGrid>
            <Box textAlign="center" pt={8}>
              <Button size="lg" colorScheme="blue">
                View All Properties
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Why Choose GREIA */}
      <Container maxW="container.xl" py={20}>
        <Stack spacing={12}>
          <Heading size="xl" textAlign="center">
            Why Choose GREIA
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Experience the future of property services with our comprehensive platform
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureCard
              title="Global Property Network"
              description="Access properties worldwide with local expertise"
              icon="🌍"
            />
            <FeatureCard
              title="Verified Professionals"
              description="Connect with certified agents and service providers"
              icon="✓"
            />
            <FeatureCard
              title="Premium Concierge"
              description="White-glove service for your property journey"
              icon="👑"
            />
          </SimpleGrid>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue('blue.50', 'blue.900')} py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="xl">Ready to Find Your Perfect Home?</Heading>
            <Text fontSize="xl" color="gray.600">
              Join thousands of satisfied clients who found their dream properties through GREIA
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button size="lg" colorScheme="blue">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" colorScheme="blue">
                Watch Demo
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

interface PropertyCardProps {
  title: string
  location: string
  price: string
  type: string
  beds: number
  baths: number
  sqft: number
  agent: string
  image: string
}

function PropertyCard({
  title,
  location,
  price,
  type,
  beds,
  baths,
  sqft,
  agent,
  image,
}: PropertyCardProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="xl"
      rounded="lg"
      overflow="hidden">
      <Image
        h={48}
        w="full"
        src={image}
        alt={title}
        objectFit="cover"
      />
      <Box p={6}>
        <Box>
          <Text
            color="blue.500"
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="sm"
            letterSpacing="wide">
            Featured
          </Text>
          <Link
            mt={2}
            fontSize="xl"
            fontWeight="semibold"
            lineHeight="short"
            color={useColorModeValue('gray.900', 'white')}
            _hover={{
              color: 'blue.500',
              textDecoration: 'none',
            }}>
            {title}
          </Link>
          <Text mt={2} color="gray.500">
            {location}
          </Text>
        </Box>
        <Stack mt={4} spacing={2}>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color={useColorModeValue('gray.900', 'white')}>
            {price}
          </Text>
          <Text color="gray.500">
            {type} • {beds} beds • {baths} baths • {sqft} sq ft
          </Text>
          <Text color="gray.500">{agent}</Text>
        </Stack>
        <Button mt={4} colorScheme="blue" width="full">
          View Details
        </Button>
      </Box>
    </Box>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      p={8}
      rounded="lg"
      align="center"
      pos="relative">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="blue.500"
        mb={1}>
        <Text fontSize="3xl">{icon}</Text>
      </Flex>
      <Stack align="center" spacing={2}>
        <Heading size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text textAlign="center" color="gray.500">
          {description}
        </Text>
      </Stack>
    </Stack>
  )
}