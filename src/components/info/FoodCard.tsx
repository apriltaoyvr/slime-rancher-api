
import Link from 'next/link';
import { Table } from '@radix-ui/themes';
import GalleryCard from '@/components/info/GalleryCard';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { IFoodGallery } from '@/app/info/food/foodFetch';

export default function FoodCard({ food }: { food: IFoodGallery }) {
  return (
    <GalleryCard
      name={food.name}
      id={food.id}
      baseUrl={'/info/food/'}
      image={food.image}
    >
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Favoured By</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row align='center'>
            <Table.Cell className='capitalize'>{food.type}</Table.Cell>
            <Table.Cell>
              {food.favouredBy ? (
                <Link href={`/api/slime/${food.favouredBy?.id}`}>
                  {food.favouredBy?.name}
                </Link>
              ) : (
                <Cross2Icon />
              )}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </GalleryCard>
  );
};
