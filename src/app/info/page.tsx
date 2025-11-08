import { Container, Flex, Grid, Section, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeCard from '@/components/info/SlimeCard';
import FoodCard from '@/components/info/FoodCard';
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
        <Grid
          columns={{ initial: '1', md: '2'}}
          justify={'center'}
          gap={'4'}
        >
          {slimes.slice(0, 2).map((slime) => (
            <SlimeCard key={slime.id} slime={slime} />
          ))}
        </Grid>
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
        <Grid
          columns={{ initial: '1', md: '2', lg: '3' }}
          justify={'center'}
          gap={'4'}
        >
          {foods.slice(14, 17).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
