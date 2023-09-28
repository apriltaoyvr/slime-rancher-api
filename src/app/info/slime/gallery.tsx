'use client';
import { useState } from 'react';
import { Flex, Section, Heading, TextField, Select } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import SlimeCard from '@/components/GalleryCards/SlimeCard';
import type { ISlimeGallery } from './slimeFetch';

export default function SlimeGallery({ slimes }: { slimes: ISlimeGallery[] }) {
  const [query, setQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredResults = slimes.filter((slime) => {
    const nameMatches = slime.name.toLowerCase().includes(query.toLowerCase());
    const typeMatches = slime.type.includes(typeFilter);
    const dietMatches = slime.diet.includes(dietFilter);
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
