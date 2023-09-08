import {
  Container,
  Section,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from '@radix-ui/themes';
import Link from 'next/link';

export default async function Home() {
  return (
    <Container className='min-h-[80vh] flex flex-col place-content-center place-items-center'>
      <Box mt='8'>
        <Flex direction='column' justify='center' align='center' gap='2'>
          <Heading as='h1' align='center' size='9' mb='1'>
            Slime Rancher API
          </Heading>
          <Flex align='center' justify='center' gap='2' m='4' wrap='wrap'>
            <Button size='3' color='ruby' variant='soft'>
              <Link href='/api'>API</Link>
            </Button>
            <Button size='3' color='pink' variant='soft'>
              <Link href='/graphql'>GraphQL</Link>
            </Button>
            <Button size='3' color='purple' variant='soft'>
              <Link href='/info'>Info</Link>
            </Button>
          </Flex>
          <Text as='p' align='center'>
            If you notice any errors or wish the contribute, please submit a
            pull request at{' '}
            <Link
              href='https://github.com/apriltaoyvr/slime-rancher-graphql'
              className='rt-Link rt-underline-auto'
            >
              the repo
            </Link>
            !
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}
