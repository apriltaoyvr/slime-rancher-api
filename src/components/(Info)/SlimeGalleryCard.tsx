import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Card, Table } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { ISlimeGallery } from '@/app/info/slime/slimeFetch';

export default function SlimeCard({ slime }: { slime: ISlimeGallery }) {
  const { id, name, image, type, diet, favouriteToy, favouriteFood, games } =
    slime;

  return (
    <Card className='transition-colors hover:bg-gray-4'>
      <Flex direction='column' align='center' justify='center'>
        <Heading as='h3' size='5' align='center'>
          <Link href={`/info/slime/${id}`}>{name}</Link>
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
              <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Diet</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Fave Food</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Fave Toy</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Games</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row align='center'>
              <Table.Cell className='capitalize'>{type}</Table.Cell>
              <Table.Cell className='capitalize'>{diet}</Table.Cell>
              <Table.Cell>
                {favouriteFood !== null ? (
                  <Link href={`/info/food/${favouriteFood?.id}`}>
                    {favouriteFood?.name}
                  </Link>
                ) : (
                  <Cross2Icon />
                )}
              </Table.Cell>
              <Table.Cell>
                {favouriteToy !== null ? (
                  <Link href={`/api/toy/${favouriteToy?.id}`}>
                    {favouriteToy?.name}
                  </Link>
                ) : (
                  <Cross2Icon />
                )}
              </Table.Cell>
              <Table.Cell className='max-w-prose'>
                {games.join(', ')}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Card>
  );
}
