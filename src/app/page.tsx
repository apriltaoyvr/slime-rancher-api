import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import slimes from '@/images/slimes.webp';

export default async function Home() {
  return (
    <Container className='flex min-h-[80vh] flex-col place-content-center place-items-center'>
        <Flex direction='column' justify='center' align='center' gap='2'>
          <Heading as='h1' align='center' size='9' mb='1'>
            Slime Rancher
          </Heading>
          <Flex align='center' justify='center' gap='2' m='4' wrap='wrap'>
            <Button size='3' color='gray' variant='soft' asChild>
              <Link href='/info'>Info</Link>
            </Button>
            <Separator orientation='vertical' />
            <Button size='3' color='ruby' variant='soft' asChild>
              <Link href='/api'>API</Link>
            </Button>
            <Button size='3' color='pink' variant='soft' asChild>
              <Link href='/graphql'>GraphQL</Link>
            </Button>
            <Button size='3' color='purple' variant='soft' asChild>
              <Link href='/docs'>API Docs</Link>
            </Button>
          </Flex>
          <Image
            src={slimes}
            alt='A cute photo of a pink slime and tabby slime'
            className='m-4 max-w-sm'
            priority
          />
          <Text as='p' align='center'>
            If you notice any errors or wish the contribute, please submit a
            pull request at{' '}
            <Link
              href='https://github.com/apriltaoyvr/slime-rancher-api'
              className='rt-Link rt-underline-auto'
            >
              the repo
            </Link>
            !
          </Text>
        </Flex>
    </Container>
  );
}
