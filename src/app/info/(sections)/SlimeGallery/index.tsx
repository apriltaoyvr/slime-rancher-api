'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Flex,
  Section,
  Heading,
  Text,
  TextField,
  Select,
  Card,
  Table,
} from '@radix-ui/themes';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';
import type { ISlimeDirectory } from '../../slimeFetch';

export default function SlimeGallery({
  slimes,
}: {
  slimes: ISlimeDirectory[];
}) {
  const [query, setQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  let filteredResults = slimes;

  // TODO: Cleaner way?
  filteredResults =
    query === ''
      ? slimes
      : slimes.filter((slime) => {
          return slime.name.toLowerCase().includes(query.toLowerCase());
        });
  filteredResults = filteredResults.filter((slime) =>
    slime.type.includes(typeFilter),
  );
  filteredResults = filteredResults.filter((slime) =>
    slime.diet.includes(dietFilter),
  );

  return (
    <>
      <Flex direction='row' align='center' justify='center' gap='2'>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
          <TextField.Input
            placeholder='Search for a slime…'
            onChange={(e) => setQuery(e.target.value)}
          />
        </TextField.Root>
        <Select.Root name='type' onValueChange={(e) => setTypeFilter(e)}>
          <Select.Trigger placeholder='Type' />
          <Select.Content>
            <Select.Item value=''>All types</Select.Item>
            <Select.Separator />
            <Select.Item value='docile'>Docile</Select.Item>
            <Select.Item value='harmful'>Harmful</Select.Item>
            <Select.Item value='hostile'>Hostile</Select.Item>
            <Select.Item value='special'>Special</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root name='diet' onValueChange={(e) => setDietFilter(e)}>
          <Select.Trigger placeholder='Diet' />
          <Select.Content>
            <Select.Item value=''>All diets</Select.Item>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Common</Select.Label>
              <Select.Item value='all'>All</Select.Item>
              <Select.Item value='meat'>Meat</Select.Item>
              <Select.Item value='fruit'>Fruit</Select.Item>
              <Select.Item value='veggie'>Veggie</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Special</Select.Label>
              <Select.Item value='water'>Water</Select.Item>
              <Select.Item value='ash'>Ash</Select.Item>
              <Select.Item value='other'>Other</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Section size='1'>
        <Flex
          direction='row'
          align='center'
          justify='center'
          wrap='wrap'
          gap='2'
        >
          {filteredResults.map((slime) => {
            const {
              id,
              name,
              image,
              type,
              diet,
              favouriteToy,
              favouriteFood,
              games,
            } = slime;

            return (
              <Card key={id} className='hover:bg-gray-4 transition-colors'>
                <Flex direction='column' align='center' justify='center'>
                  <Heading as='h3' size='5' align='center'>
                    <Link href={`/info/slime/${slime.id}`}>{name}</Link>
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
                        <Table.ColumnHeaderCell>
                          Fave Food
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                          Fave Toy
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Games</Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row align='center'>
                        <Table.Cell className='capitalize'>{type}</Table.Cell>
                        <Table.Cell className='capitalize'>{diet}</Table.Cell>
                        <Table.Cell>
                          {favouriteFood !== null ? (
                            <Link href={`/api/food/${favouriteFood?.id}`}>
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
          })}
        </Flex>
      </Section>
    </>
  );
}
