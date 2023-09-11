import { Container, Section, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import CalloutComponent from '@/components/CalloutComponent';

// Sections
import GqlSection from './(sections)/GqlSection';
import ApiSection from './(sections)/ApiSection';

export default function Docs() {
  return (
    <Container>
      <Flex direction='column' align='center' m='2' mt='4' gap='4'>
        <Heading align='center' size='8' as='h1' mb='2'>
          API Documentation
        </Heading>
        <Text>
          This API offers both RESTful and GraphQL endpoints. Let's ranch! 🌟🐌
        </Text>
      </Flex>
      <GqlSection />
      <ApiSection />
      <Section id='credits' size='1'>
        <Flex direction='column' align='center'>
          <Heading align='center' as='h2' m='2'>
            Credit
          </Heading>
          <Text>
            Info is sourced from the{' '}
            <Link
              href='https://slimerancher.fandom.com/wiki/Slime_Rancher_Wiki'
              className='rt-Link rt-underline-auto'
            >
              Slime Rancher Wiki
            </Link>
            .
          </Text>
          <Text>
            Images belong to Monomi Park, developers of Slime Rancher.
          </Text>
        </Flex>
      </Section>
    </Container>
  );
}
