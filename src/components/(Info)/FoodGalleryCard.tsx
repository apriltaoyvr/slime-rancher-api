import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Card, Table } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { IFoodGallery } from '@/app/info/food/foodFetch';

export default function FoodCard({ food }: { food: IFoodGallery }) {
  const { id, name, image, type, favouredBy } =
    food;

  return (
    <Card className='transition-colors hover:bg-gray-4'>
      <Flex direction='column' align='center' justify='center'>
        <Heading as='h3' size='5' align='center'>
          <Link href={`/info/food/${id}`}>{name}</Link>
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
              <Table.ColumnHeaderCell>Favoured By</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row align='center'>
              <Table.Cell className='capitalize'>{type}</Table.Cell>
              <Table.Cell>
                {favouredBy ? (
                  <Link href={`/api/slime/${favouredBy?.id}`}>
                    {favouredBy?.name}
                  </Link>
                ) : (
                  <Cross2Icon />
                )}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Card>
  );
}
