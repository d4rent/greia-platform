'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.400',
                zIndex: -1,
              }}>
              Your Life's Operating System
            </Text>
            <br />
            <Text as={'span'} color={'brand.400'}>
              All in One Platform
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            GREIA is your comprehensive platform for properties, services, lifestyle, and community.
            Find your dream home, connect with verified professionals, and discover amazing experiences
            all in one place.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'brand'}
              bg={'brand.400'}
              _hover={{ bg: 'brand.500' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>

      {/* Featured Sections */}
      <Stack spacing={20} py={20}>
        {/* Properties Section */}
        <FeaturedSection
          title="Find Your Perfect Property"
          description="Browse through our curated selection of properties for sale and rent. All listings are verified and updated regularly."
          imageSrc="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          buttonText="Browse Properties"
          buttonLink="/properties"
        />

        {/* Services Section */}
        <FeaturedSection
          title="Connect with Verified Professionals"
          description="Find trusted service providers for all your needs. From home maintenance to lifestyle services, we've got you covered."
          imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          buttonText="Find Services"
          buttonLink="/services"
          imageOnRight
        />

        {/* Lifestyle Section */}
        <FeaturedSection
          title="Experience More"
          description="Discover amazing experiences in your city. Book restaurants, rent cars, or join exciting tours."
          imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          buttonText="Explore Lifestyle"
          buttonLink="/lifestyle"
        />
      </Stack>
    </Container>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

interface FeaturedSectionProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
  buttonLink: string
  imageOnRight?: boolean
}

const FeaturedSection = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  imageOnRight = false,
}: FeaturedSectionProps) => {
  const stackDirection = imageOnRight ? 'row-reverse' : 'row'

  return (
    <Stack direction={{ base: 'column', md: stackDirection }} spacing={8}>
      <Box flex={1}>
        <Image
          rounded={'md'}
          alt={title}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', md: '400px' }}
          src={imageSrc}
        />
      </Box>
      <Stack flex={1} spacing={5} justify={'center'}>
        <Heading>{title}</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
          {description}
        </Text>
        <Button
          as={'a'}
          href={buttonLink}
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          colorScheme={'brand'}
          bg={'brand.400'}
          _hover={{ bg: 'brand.500' }}>
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  )
}