import {
  Section,
  Flex,
  Heading,
} from '@radix-ui/themes';
import Link from 'next/link';
import ObjectCard from '@/components/ObjectCard';
import ObjectFields from '@/components/ObjectFields';

// Static Image Imports
import slimes from '@/images/slimes.webp';
import food from '@/images/food.webp';
import location from '@/images/location.webp';
import toys from '@/images/toys.webp';
import slimepedia from '@/images/slimepedia.webp';

export default function GqlSection() {
  return (
    <Section id='graphql' size='2'>
      <Heading as='h2' size='7' align='center'>
        <Link href='/graphql' className='rt-Link rt-underline-auto'>
          GraphQL
        </Link>
      </Heading>
      <Flex direction='column' justify='center' align='center' gap='2'>
        <Section size='1'>
          <Heading as='h2' align='center' mb='2'>
            Objects
          </Heading>
          <Flex justify='center' wrap='wrap' gap='2' className=''>
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
              <ObjectFields name='locations' type='[Location]' />
              <ObjectFields name='properties' type='[String]' />
              <ObjectFields name='games' type='[Integer!]!' />
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
              <ObjectFields name='locations' type='[Location]' />
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
              <ObjectFields name='games' type='[Integer!]!' />
            </ObjectCard>
            <ObjectCard
              name='Toys'
              desc='A list of all toys in the game'
              src={toys}
            >
              <ObjectFields name='id' type='ID!' />
              <ObjectFields name='name' type='String!' />
              <ObjectFields name='description' type='String!' />
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
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
}
