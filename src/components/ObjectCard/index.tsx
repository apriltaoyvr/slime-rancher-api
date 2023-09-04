import { Card, Separator, Flex, Box, Heading, Text } from '@radix-ui/themes';
import Image, { type StaticImageData } from 'next/image';
import React from 'react';

export default function ObjectCard({
  name,
  desc,
  src = undefined,
  children,
}: {
  name: string;
  desc: string;
  src?: StaticImageData;
  children: React.ReactNode;
}) {
  return (
    <Card size='2' className='w-full h-full'>
      <Flex direction='column' justify='center' align='center'>
        {src && 
        <Flex
          m='1'
          mb='4'
          justify='center'
          align='center'
          className='aspect-video object-contain'
          asChild
        >
          <Image
            src={src}
            sizes='sizes="(max-width: 768px) 25vw"'
            alt={`An icon of ${name}`}
          />
        </Flex>
        }
        <Box>
          <Heading as='h3'>{name}</Heading>
          <Text as='p' color='gray' size='2'>
            {desc}
          </Text>
          <Separator my='3' size='4' />
          <Flex direction='column' gap='2' p='2'>
            {children}
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
