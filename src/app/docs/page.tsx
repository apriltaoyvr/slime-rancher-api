import { Container, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

// Sections
import GqlSection from './(sections)/GqlSection';
import ApiSection from './(sections)/ApiSection';

export default function Docs() {
  return (
    <Container>
      <Flex direction='column' align='center' m='2' mt='4' gap='4'>
        <Heading align='center' size='8' as='h1' mb='2'>
          Documentation
        </Heading>
        <Text>
          This API offers both RESTful and GraphQL endpoints.
        </Text>
      </Flex>
      <GqlSection />
      <ApiSection />
    </Container>
  );
}
