'use client';
import { useState } from 'react';
import { Flex, Section, Heading, TextField, Select } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import LocationCard from '@/components/(Info)/LocationGalleryCard';
import type { ILocationGallery } from './locationFetch';

export default function LocationGallery({
  locations,
}: {
  locations: ILocationGallery[];
}) {
  const [query, setQuery] = useState('');

  const filteredResults = locations.filter((location) => {
    const nameMatches = location.name
      .toLowerCase()
      .includes(query.toLowerCase());
    if (nameMatches) return location;
  });

  return (
    <Section size='2' p='2'>
      <Heading as='h1' align='center'>
        Locations
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
            placeholder='Search for a location…'
            onChange={(e) => setQuery(e.target.value)}
          />
        </TextField.Root>
      </Flex>
      <Section id='gallery' size='1'>
        <Flex
          direction='row'
          align='center'
          justify='center'
          wrap='wrap'
          gap='2'
        >
          {filteredResults.map((location) => {
            return <LocationCard key={location.id} location={location} />;
          })}
        </Flex>
      </Section>
    </Section>
  );
}
