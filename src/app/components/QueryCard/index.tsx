import { Card, Separator, Flex, Box, Heading, Text } from '@radix-ui/themes';
import Image, { type StaticImageData } from 'next/image';
import React from 'react';

export default function QueryCard({
  name,
  desc,
  src,
  children
}: {
  name: string;
  desc: string;
  src: StaticImageData;
  children: React.ReactNode
}) {
  return (
    <Card size='3' m='2' className='w-full'>
      <Flex direction='column' align={'start'}>
        <Flex
          p='2'
          px='4'
          justify='center'
          align='center'
          className='aspect-video object-contain w-full'
          asChild
        >
          <Image src={src} alt={`An icon of ${name}`} />
        </Flex>
        <Box>
          <Heading as='h3'>{name}</Heading>
          <Text as='p' color='gray' size='2'>
            {desc}
          </Text>
          <Separator my='3' size='4' />
          <Flex direction='column' gap='2'>{children}</Flex>
        </Box>
      </Flex>
    </Card>
  );
}
