import {
  Container,
  Section,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Separator,
} from '@radix-ui/themes';
import CalloutComponent from './components/CalloutComponent';
import QueryCard from './components/QueryCard';

// Static Image Imports
import slimes from '@/app/images/slimes.webp';
import food from '@/app/images/food.webp';
import location from '@/app/images/location.webp';
import toys from '@/app/images/toys.webp';
import QueryDetails from './components/QueryDetails';

export default function Home() {
  return (
    <Container>
      <Box mt='8'>
        <Flex direction='column' justify={'center'} align={'center'} gap='2'>
          <Heading as='h1' align='center' size='9' m='4'>
            Slime Rancher GraphQL
          </Heading>
          <CalloutComponent />
          <Box m='4'>
            <Text as='p' align='center'>
              The endpoint is available at{' '}
              <Link href='/api/graphql'>/api/graphql</Link>
            </Text>
            <Text as='p' align='center'>
              If you notice any errors or wish the contribute, please submit a
              pull request at{' '}
              <Link href='https://github.com/apriltaoyvr/slime-rancher-graphql'>
                the repo
              </Link>
              !
            </Text>
          </Box>
        </Flex>
      </Box>
      <Section>
        <Flex direction='column' justify={'center'} align={'center'} gap='2'>
          <Heading as='h2'>Queries</Heading>
          <section className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 flex flex-row flex-wrap'>
            <QueryCard
              name='Slimes'
              desc='A list of all slimes in the game'
              src={slimes}
            >
              <QueryDetails name='id' type='ID!' />
              <QueryDetails name='name' type='String!' />
              <QueryDetails name='image' type='String!' />
              <QueryDetails name='diet' type='Diet!' />
              <QueryDetails name='favouriteToy' type='Toy' />
              <QueryDetails name='favouriteFood' type='Food' />
              <QueryDetails name='type' type='SlimeType!' />
              <QueryDetails name='slimepedia' type='Slimepedia!' />
              <QueryDetails name='locations' type='[Location]!' />
              <QueryDetails name='properties' type='[String]' />
            </QueryCard>
            <QueryCard
              name='Foods'
              desc='A list of all food in the game'
              src={food}
            >
              <QueryDetails name='id' type='ID!' />
              <QueryDetails name='name' type='String!' />
              <QueryDetails name='image' type='String!' />
              <QueryDetails name='type' type='Diet!' />
              <QueryDetails name='favouredBy' type='Slime!' />
              <QueryDetails name='locations' type='[Location]!' />
              <QueryDetails name='slimepedia' type='Slimepedia!' />
            </QueryCard>
            <QueryCard
              name='Locations'
              desc='A list of all locations in the game'
              src={location}
            >
              <QueryDetails name='id' type='ID!' />
              <QueryDetails name='name' type='String!' />
              <QueryDetails name='image' type='String!' />
              <QueryDetails name='slimepedia' type='String!' />
              <QueryDetails name='slimes' type='[Slime]!' />
              <QueryDetails name='foods' type='[Food]!' />
            </QueryCard>

            <QueryCard
              name='Toys'
              desc='A list of all toys in the game'
              src={toys}
            >
              <QueryDetails name='id' type='ID!' />
              <QueryDetails name='name' type='String!' />
              <QueryDetails name='favouredBy' type='Slime!' />
              <QueryDetails name='price' type='Int!' />
            </QueryCard>
          </section>
        </Flex>
      </Section>
      <footer className='place-self-end'>
        <Separator my='3' size='4' />
        <Flex direction='row' align='center' justify='center' gap='2'>
          <Text size='2'>
            Info sourced from the{' '}
            <Link href='https://slimerancher.fandom.com/wiki/Slime_Rancher_Wiki'>
              Slime Rancher Wiki
            </Link>
            .
          </Text>
          <Text size='2'>
            Images belong to Monomi Park, developers of Slime Rancher.
          </Text>
          <Text size='2'>
            Site and endpoint by{' '}
            <Link href='https://github.com/apriltaoyvr'>April Tao</Link>.
          </Text>
        </Flex>
      </footer>
    </Container>
  );
}
