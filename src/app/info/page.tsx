import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import CalloutComponent from '@/components/CalloutComponent';
import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeCard from '@/components/(Info)/SlimeGalleryCard';
import FoodCard from '@/components/(Info)/FoodGalleryCard';
import { type ISlimeGalleryFetch, allSlimesQuery } from './slime/slimeFetch';
import { type IFoodGalleryFetch, allFoodsQuery } from './food/foodFetch';

export default async function Info() {
  const fetchAllSlimes = graphqlFetcher(allSlimesQuery);
  const fetchAllFoods = graphqlFetcher(allFoodsQuery);

  const [slimesRes, foodsRes]: [ISlimeGalleryFetch, IFoodGalleryFetch] =
    await Promise.all([fetchAllSlimes, fetchAllFoods]);

  const slimes = slimesRes.data.slimes;
  const foods = foodsRes.data.foods;

  return (
    <Container>
      <Section size='1'>
        <Flex direction='column' align='center' justify='center' mt='4'>
          <Heading as='h1' size='8' align='center' mb='2'>
            Info
          </Heading>
          <CalloutComponent>
            This page is currently a work in progress.
          </CalloutComponent>
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
          {foods.slice(15, 17).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </Flex>
      </Section>
      {/* <Section size='1'>
        <Heading
          as='h2'
          align='center'
          mb='2'
          className='rt-Link rt-underline-auto'
        >
          <Link href='/info/locations'>Locations</Link>
        </Heading>
        <Flex
          direction='row'
          wrap='wrap'
          align='center'
          justify='center'
          gap='2'
        >
          {foods.slice(15, 17).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </Flex>
      </Section> */}
    </Container>
  );
}
