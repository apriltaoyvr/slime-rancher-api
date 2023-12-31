import {
  Container,
  Section,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes';
import Link from 'next/link';
import ObjectCard from '@/components/(Docs)/ObjectCard';
import ObjectFields from '@/components/(Docs)/ObjectFields';
import slimes from '@/images/slimes.webp';
import food from '@/images/food.webp';
import location from '@/images/location.webp';
import toys from '@/images/toys.webp';
import slimepedia from '@/images/slimepedia.webp';

export default async function Home() {
  return (
    <>
      <Container>
        <Box mt='8'>
          <Flex direction='column' justify={'center'} align={'center'} gap='2'>
            <Heading as='h1' align='center' size='9' m='4' mb='1'>
              Slime Rancher API
            </Heading>
            <Flex align='center' justify='center' gap='2' m='4' wrap='wrap'>
              <Button size='3' variant='outline'>
                <Link href='/graphql'>GraphQL</Link>
              </Button>
              <Button size='3' variant='outline'>
                <Link href='/api'>API</Link>
              </Button>
            </Flex>
            <Text as='p' align='center'>
              If you notice any errors or wish the contribute, please submit a
              pull request at{' '}
              <Link href='https://github.com/apriltaoyvr/slime-rancher-api'>
                the repo
              </Link>
              !
            </Text>
          </Flex>
        </Box>
        <Section>
          <Flex direction='column' justify='center' align='center' gap='2'>
            <Box>
              <Heading as='h2' align='center' mb='2'>
                Objects
              </Heading>
              <div className='flex flex-row flex-wrap gap-2 p-2 lg:grid lg:grid-cols-3 xl:grid-cols-4'>
                <ObjectCard
                  name='Slimes'
                  desc='A list of all slimes in the game'
                  src={slimes}
                >
                  <ObjectFields name='id' type='ID!' />
                  <ObjectFields name='name' type='String!' />
                  <ObjectFields name='image' type='String!' />
                  <ObjectFields name='diet' type='FoodType!' />
                  <ObjectFields name='favouriteToy' type='Toy' />
                  <ObjectFields name='favouriteFood' type='Food' />
                  <ObjectFields name='type' type='SlimeType!' />
                  <ObjectFields name='slimepedia' type='Slimepedia!' />
                  <ObjectFields name='locations' type='[Location]!' />
                  <ObjectFields name='properties' type='[String]' />
                </ObjectCard>
                <ObjectCard
                  name='Foods'
                  desc='A list of all food in the game'
                  src={food}
                >
                  <ObjectFields name='id' type='ID!' />
                  <ObjectFields name='name' type='String!' />
                  <ObjectFields name='image' type='String!' />
                  <ObjectFields name='type' type='FoodType!' />
                  <ObjectFields name='favouredBy' type='Slime!' />
                  <ObjectFields name='locations' type='[Location]!' />
                  <ObjectFields name='slimepedia' type='Slimepedia!' />
                </ObjectCard>
                <ObjectCard
                  name='Locations'
                  desc='A list of all locations in the game'
                  src={location}
                >
                  <ObjectFields name='id' type='ID!' />
                  <ObjectFields name='name' type='String!' />
                  <ObjectFields name='image' type='String!' />
                  <ObjectFields name='slimepedia' type='Slimepedia!' />
                  <ObjectFields name='slimes' type='[Slime]!' />
                  <ObjectFields name='foods' type='[Food]!' />
                </ObjectCard>
                <ObjectCard
                  name='Toys'
                  desc='A list of all toys in the game'
                  src={toys}
                >
                  <ObjectFields name='id' type='ID!' />
                  <ObjectFields name='name' type='String!' />
                  <ObjectFields name='favouredBy' type='Slime!' />
                  <ObjectFields name='price' type='Int!' />
                </ObjectCard>
                <ObjectCard
                  name='Slimepedia'
                  desc='A Slimepedia entry'
                  src={slimepedia}
                >
                  <ObjectFields name='about' type='String!' />
                  <ObjectFields name='slimeology' type='String!' />
                  <ObjectFields name='risks' type='String!' />
                  <ObjectFields name='plortonomics' type='String!' />
                  <ObjectFields name='ranch' type='String!' />
                </ObjectCard>
              </div>
            </Box>
          </Flex>
        </Section>
      </Container>
      <Separator my='3' size='4' />
      <Box px='4' mb='2' className='place-self-end'>
        <Flex
          direction='row'
          align='center'
          justify='center'
          wrap='wrap'
          gap='2'
        >
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
      </Box>
    </>
  );
}
