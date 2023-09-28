import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
// Cards
import SlimeCard from '@/components/GalleryCards/SlimeCard';
import FoodCard from '@/components/GalleryCards/FoodCard';
import LocationCard from '@/components/GalleryCards/LocationCard';
// Fetches
import graphqlFetcher from '@/lib/gqlFetcher';
import { type ISlimeGalleryFetch, allSlimesQuery } from './slime/slimeFetch';
import { type IFoodGalleryFetch, allFoodsQuery } from './food/foodFetch';
import { type ILocationGalleryFetch, allLocationsQuery } from './location/locationFetch';

export default async function Info() {
  const fetchAllSlimes = graphqlFetcher(allSlimesQuery);
  const fetchAllFoods = graphqlFetcher(allFoodsQuery);
  const fetchAllLocations = graphqlFetcher(allLocationsQuery);

  const [slimesRes, foodsRes, locationsRes]: [
    ISlimeGalleryFetch,
    IFoodGalleryFetch,
    ILocationGalleryFetch,
  ] = await Promise.all([fetchAllSlimes, fetchAllFoods, fetchAllLocations]);

  const slimes = slimesRes.data.slimes;
  const foods = foodsRes.data.foods;
  const locations = locationsRes.data.locations;

  return (
    <Container>
      <Section size='1'>
        <Flex direction='column' align='center' justify='center' mt='4'>
          <Heading as='h1' size='8' align='center' mb='2'>
            Info
          </Heading>
          <Flex direction='column' align='center' justify='center' m='2'>
            <Text align='center'>
              This is a page for visually displaying the Slime Rancher API's
              data.
            </Text>
            <Text align='center'>
              It can also be a handy way to look up information!
            </Text>
          </Flex>
        </Flex>
      </Section>
      <Section size='1'>
        <Heading
          as='h2'
          align='center'
          mb='2'
          className='rt-Link rt-underline-auto'
        >
          <Link href='/info/slime'>Slimes</Link>
        </Heading>
        <Flex
          direction='row'
          wrap='wrap'
          align='center'
          justify='center'
          gap='2'
        >
          {slimes.slice(0, 2).map((slime) => (
            <SlimeCard key={slime.id} slime={slime} />
          ))}
        </Flex>
      </Section>
      <Section size='1'>
        <Heading
          as='h2'
          align='center'
          mb='2'
          className='rt-Link rt-underline-auto'
        >
          <Link href='/info/food'>Foods</Link>
        </Heading>
        <Flex
          direction='row'
          wrap='wrap'
          align='center'
          justify='center'
          gap='2'
        >
          {foods.slice(14, 17).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </Flex>
      </Section>
      <Section size='1'>
        <Heading
          as='h2'
          align='center'
          mb='2'
          className='rt-Link rt-underline-auto'
        >
          <Link href='/info/location'>Locations</Link>
        </Heading>
        <Flex
          direction='row'
          wrap='wrap'
          align='center'
          justify='center'
          gap='2'
        >
          {locations.slice(0, 3).map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </Flex>
      </Section>
    </Container>
  );
}
