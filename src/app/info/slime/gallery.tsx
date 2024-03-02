'use client';
import { useState } from 'react';
import { Flex, Section, Heading, TextField, Select } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import SlimeCard from '@/components/(Info)/SlimeGalleryCard';
import type { ISlimeGallery } from './slimeFetch';

export default function SlimeGallery({ slimes }: { slimes: ISlimeGallery[] }) {
  const [query, setQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // We filter the slimes based on the query and the filters
  const filteredResults = slimes.filter((slime) => {
    let nameMatches = slime.name.toLowerCase().includes(query.toLowerCase());
    // With the Radix Select API changes, we must explicitly check for 'all' values
    let typeMatches = dietFilter === 'all' ? true : slime.type.includes(typeFilter);
    let dietMatches = dietFilter === 'all' ? true : slime.diet.includes(dietFilter);
    if (dietFilter === 'common') {
      dietMatches = slime.diet.includes('meat') || slime.diet.includes('fruit') || slime.diet.includes('veggie') || slime.diet.includes('nectar');
    }

    if (nameMatches && typeMatches && dietMatches) return slime;
  });

  return (
    <Section size='2' p='2'>
      <Heading as='h1' align='center'>
        Slimes
      </Heading>
      <Flex
        id='filters'
        direction='row'
        align='center'
        justify='center'
        gap='2'
      >
        <TextField.Root id='search'>
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
          <TextField.Input
            placeholder='Search for a slime…'
            onChange={(e) => setQuery(e.target.value)}
          />
        </TextField.Root>
        <Select.Root name='type' onValueChange={(e) => setTypeFilter(e)}>
          <Select.Trigger placeholder='All types' />
          <Select.Content>
            <Select.Item value='all'>All</Select.Item>
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
            <Select.Item value='all'>All diets</Select.Item>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Common</Select.Label>
              <Select.Item value='common'>All common</Select.Item>
              <Select.Item value='meat'>Meat</Select.Item>
              <Select.Item value='fruit'>Fruit</Select.Item>
              <Select.Item value='veggie'>Veggie</Select.Item>
              <Select.Item value='nectar'>Nectar</Select.Item>
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
      <Section id='gallery' size='1'>
        <Flex
          direction='row'
          align='center'
          justify='center'
          wrap='wrap'
          gap='2'
        >
          {filteredResults.map((slime) => {
            return <SlimeCard key={slime.id} slime={slime} />;
          })}
        </Flex>
      </Section>
    </Section>
  );
}
