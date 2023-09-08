import {
  Container,
  Section,
  Flex,
  Heading,
  Text,
  Table
} from '@radix-ui/themes';
import Link from 'next/link';
import ObjectCard from '@/components/ObjectCard';
import ObjectFields from '@/components/ObjectFields';

// Static Image Imports
import question from '@/images/question.webp';
import slimes from '@/images/slimes.webp';
import food from '@/images/food.webp';
import location from '@/images/location.webp';
import toys from '@/images/toys.webp';
import slimepedia from '@/images/slimepedia.webp';

export default function Info() {
  return (
    <Container>
      <Flex direction='column' align='center' m='2' gap='2'>
        <Heading align='center' size='8' as='h1' mb='2'>
          Info
        </Heading>
        <Text>
          This API offers both RESTful and GraphQL endpoints. Let's ranch! 🌟🐌
        </Text>
      </Flex>
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
            </Flex>
          </Section>
        </Flex>
      </Section>
      <Section id='api'>
        <Heading as='h2' size='7' align='center'>
          <Link href='/api' className='rt-Link rt-underline-auto'>
            RESTful API
          </Link>
        </Heading>
        <Section size='1'>
          <Heading as='h3' align='center' mb='4'>
            Endpoints
          </Heading>
          <Table.Root variant='surface'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Method</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Endpoint</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Resource List</Table.RowHeaderCell>
                <Table.Cell>GET</Table.Cell>
                <Table.Cell>{`https://slime-rancher.vercel.app/api/`}</Table.Cell>
                <Table.Cell>Returns all resource lists as an array</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Slime</Table.RowHeaderCell>
                <Table.Cell>GET</Table.Cell>
                <Table.Cell>{`https://slime-rancher.vercel.app/api/slime/{slime id}`}</Table.Cell>
                <Table.Cell>
                  Returns all slimes. If appended with a slime's id, returns
                  only that slime's info.
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Food</Table.RowHeaderCell>
                <Table.Cell>GET</Table.Cell>
                <Table.Cell>{`https://slime-rancher.vercel.app/api/food/{food id}`}</Table.Cell>
                <Table.Cell>
                  Returns all foods. If appended with a food's id, returns only
                  that food's info.
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Location</Table.RowHeaderCell>
                <Table.Cell>GET</Table.Cell>
                <Table.Cell>{`https://slime-rancher.vercel.app/api/location/{location id}`}</Table.Cell>
                <Table.Cell>
                  Returns all locations. If appended with a location's id,
                  returns only that location's info.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Toy</Table.RowHeaderCell>
                <Table.Cell>GET</Table.Cell>
                <Table.Cell>{`https://slime-rancher.vercel.app/api/toy/{toy id}`}</Table.Cell>
                <Table.Cell>
                  Returns all toys. If appended with a toy's id,
                  returns only that toy's info.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Section>
      </Section>

      <Section id='credits' size='1'>
        <Flex direction='column' align='center'>
          <Heading align='center' as='h2' m='2'>
            Credit
          </Heading>
          <Text>
            Info is sourced from the{' '}
            <Link
              href='https://slimerancher.fandom.com/wiki/Slime_Rancher_Wiki'
              className='rt-Link rt-underline-auto'
            >
              Slime Rancher Wiki
            </Link>
            .
          </Text>
          <Text>
            Images belong to Monomi Park, developers of Slime Rancher.
          </Text>
        </Flex>
      </Section>
    </Container>
  );
}
