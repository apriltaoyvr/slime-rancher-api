import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Heading, Card } from '@radix-ui/themes';

type Props = {
  id: string;
  name: string;
  baseUrl: string;
  image: string;
  children: React.ReactNode;
};

export default function GalleryCard(props: Props) {
  const { id, name, baseUrl, image, children } = props;

  return (
    <Card className='hover:bg-gray-4 h-full w-full transition-colors'>
      <Flex direction='column' align='center' justify='between' height='100%'>
        <Heading as='h3' size='5' align='center'>
          <Link href={baseUrl + id}>{name}</Link>
        </Heading>
        <Heading as='h4' size='3' color='gray' align='center'>
          {id}
        </Heading>
        <figure className='p-4'>
          <Image
            src={image}
            alt={`An image of ${name}`}
            width={250}
            height={250}
            className='aspect-square max-w-[150px] object-contain'
          />
        </figure>
        {children}
      </Flex>
    </Card>
  );
}
