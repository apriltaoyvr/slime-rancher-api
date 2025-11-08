'use client';

import { useState } from 'react';
import {
  Flex,
  Grid,
  Section,
  Heading,
  TextField,
  Select,
} from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import FoodCard from '@/components/info/FoodCard';

import type { IFoodGallery } from './foodFetch';

export default function FoodGallery({ foods }: { foods: IFoodGallery[] }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredResults = foods.filter((food) => {
    const nameMatches = food.name.toLowerCase().includes(query.toLowerCase());
    const typeMatches =
      typeFilter == 'all' ? true : food.type.includes(typeFilter);
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
        <TextField.Root
          placeholder='Search for a food…'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
        </TextField.Root>
        <Select.Root name='type' onValueChange={(e) => setTypeFilter(e)}>
          <Select.Trigger placeholder='Type' />
          <Select.Content>
            <Select.Item value='all'>All types</Select.Item>
            <Select.Separator />
            <Select.Item value='fruit'>Fruit</Select.Item>
            <Select.Item value='veggie'>Veggie</Select.Item>
            <Select.Item value='meat'>Meat</Select.Item>
            <Select.Item value='nectar'>Nectar</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Section id='gallery' size='1'>
        <Grid
          columns={{ initial: '1', md: '2', lg: '3' }}
          justify={'center'}
          align={'center'}
          gap={'4'}
        >
          {filteredResults.map((food) => {
            return <FoodCard key={food.id} food={food} />;
          })}
        </Grid>
      </Section>
    </Section>
  );
}

