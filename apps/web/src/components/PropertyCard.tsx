import {
  Box,
  Link,
  Text,
  Stack,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

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

export function PropertyCard({
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
      overflow="hidden"
      className="property-card">
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