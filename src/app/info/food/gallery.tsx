'use client';
import { useState } from 'react';
import { Flex, Section, Heading, TextField, Select } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import FoodCard from '@/components/GalleryCards/FoodCard';
import type { IFoodGallery } from './foodFetch';

export default function FoodGallery({ foods }: { foods: IFoodGallery[] }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredResults = foods.filter((food) => {
    const nameMatches = food.name.toLowerCase().includes(query.toLowerCase());
    const typeMatches = food.type.includes(typeFilter);
    if (nameMatches && typeMatches) return food;
  });

  return (
    <Section size='2' p='2'>
      <Heading as='h1' align='center' mb='2'>
        Foods
      </Heading>
      <Flex
        id='filters'
        direction='row'
        align='center'
        justify='center'
        gap='2'
      >
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
          <TextField.Input
            placeholder='Search for a food…'
            onChange={(e) => setQuery(e.target.value)}
          />
        </TextField.Root>
        <Select.Root name='type' onValueChange={(e) => setTypeFilter(e)}>
          <Select.Trigger placeholder='Type' />
          <Select.Content>
            <Select.Item value=''>All types</Select.Item>
            <Select.Separator />
            <Select.Item value='fruit'>Fruit</Select.Item>
            <Select.Item value='veggie'>Veggie</Select.Item>
            <Select.Item value='meat'>Meat</Select.Item>
            <Select.Item value='nectar'>Nectar</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Section id='gallery' size='1'>
        <Flex
          direction='row'
          align='center'
          justify='center'
          wrap='wrap'
          gap='2'
        >
          {filteredResults.map((food) => {
            return <FoodCard key={food.id} food={food} />;
          })}
        </Flex>
      </Section>
    </Section>
  );
}
