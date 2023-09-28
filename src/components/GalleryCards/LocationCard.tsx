import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Card, Table } from '@radix-ui/themes';
import type { ILocationGallery } from '@/app/info/location/locationFetch';

export default function LocationCard({ location }: { location: ILocationGallery }) {
  const { id, name, image, games } = location;

  return (
    <Card className='transition-colors hover:bg-gray-4'>
      <Flex direction='column' align='center' justify='center'>
        <Heading as='h3' size='5' align='center'>
          <Link href={`/info/location/${id}`}>{name}</Link>
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
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Games</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row align='center'>
              <Table.Cell className='max-w-prose text-center'>
                {games.join(', ')}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Card>
  );
}
