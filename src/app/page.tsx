import {
  Container,
  Box,
  Flex,
  Section,
  Heading,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import slimesImage from '@/images/slimes.webp';

export default async function Home() {
  return (
    <Container className='flex min-h-[80vh] flex-col place-content-center place-items-center'>
      <Section mt='8'>
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
              <Link href='/docs'>Documentation</Link>
            </Button>
          </Flex>
          <Image
            src={slimesImage}
            alt='A cute photo of a pink slime and tabby slime'
            className='m-4 max-w-sm'
            priority
            unoptimized={true}
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
      </Section>
      <Section id='credits' size='1'>
        <Flex direction='column' align='center'>
          <Heading align='center' as='h2' m='2'>
            Credits
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
