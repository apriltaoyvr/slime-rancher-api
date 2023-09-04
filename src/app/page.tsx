import { Flex, Heading, Text, Link } from '@radix-ui/themes';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Flex
      direction='column'
      justify={'center'}
      align={'center'}
      gap='3'
      className='m-2'
    >
      <Heading as='h1' size='9' align={'center'}>
        Slime Rancher GraphQL
      </Heading>
      <Text as='p'>
        The endpoint is available at{' '}
        <Text>
          <Link href='/api/graphql'>Insert Link Here</Link>
        </Text>.
      </Text>
    </Flex>
  );
}
