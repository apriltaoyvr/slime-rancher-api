
import Link from 'next/link';
import { Table } from '@radix-ui/themes';
import GalleryCard from '@/components/info/GalleryCard';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { ISlimeGallery } from '@/app/info/slime/slimeFetch';

export default function SlimeCard({ slime }: { slime: ISlimeGallery }) {
  return (
    <GalleryCard
      id={slime.id}
      name={slime.name}
      baseUrl={'/info/slime/'}
      image={slime.image}
    >
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
            <Table.Cell className='capitalize'>{slime.type}</Table.Cell>
            <Table.Cell className='capitalize'>{slime.diet}</Table.Cell>
            <Table.Cell>
              {slime.favouriteFood !== null ? (
                <Link href={`/info/food/${slime.favouriteFood?.id}`}>
                  {slime.favouriteFood?.name}
                </Link>
              ) : (
                <Cross2Icon />
              )}
            </Table.Cell>
            <Table.Cell>
              {slime.favouriteToy !== null ? (
                <Link href={`/api/toy/${slime.favouriteToy?.id}`}>
                  {slime.favouriteToy?.name}
                </Link>
              ) : (
                <Cross2Icon />
              )}
            </Table.Cell>
            <Table.Cell className='max-w-prose'>{slime.games.join(', ')}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </GalleryCard>
  );
};
