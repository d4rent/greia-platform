'use client'

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Select,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { PropertyCard } from '@/components/PropertyCard'

export default function PropertiesPage() {
  return (
    <Container maxW="container.xl" py={8}>
      {/* Search and Filters */}
      <Box mb={8}>
        <Stack spacing={4}>
          <Heading size="lg">Search Properties</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            <Input placeholder="Search location..." />
            <Select placeholder="Property type">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
            </Select>
            <Select placeholder="Price range">
              <option value="0-100000">€0 - €100,000</option>
              <option value="100000-300000">€100,000 - €300,000</option>
              <option value="300000-500000">€300,000 - €500,000</option>
              <option value="500000+">€500,000+</option>
            </Select>
            <Button colorScheme="blue">Search</Button>
          </SimpleGrid>
        </Stack>
      </Box>

      {/* Results */}
      <Box>
        <Stack spacing={4}>
          <Heading size="lg">Featured Properties</Heading>
          <Text color="gray.600">Showing 9 of 24 properties</Text>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
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
            {/* Add more PropertyCard components here */}
          </SimpleGrid>

          {/* Pagination */}
          <Stack direction="row" spacing={2} justify="center" mt={8}>
            <Button variant="outline">Previous</Button>
            <Button variant="solid" colorScheme="blue">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}