import {
  Container,
  Card,
  Box,
  Flex,
  Table,
  Heading,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import graphqlFetcher from '@/lib/gqlFetcher';
import { type IFetchRes, singleSlimeQuery } from './query';

export default async function SlimePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res: IFetchRes = await graphqlFetcher(singleSlimeQuery, {
    slimeId: slug,
  });

  const {
    id,
    name,
    image,
    diet,
    favouriteFood,
    favouriteToy,
    type,
    slimepedia,
    locations,
    properties,
    games,
  } = res.data.slimes[0];

  return (
    <Container>
      <Card m='2'>
        <Flex direction='column' justify='center' align='center'>
          <Heading as='h1' align='center' size='8'>
            {name}
          </Heading>
          <Heading as='h2' align='center' size='7' color='gray'>
            {id}
          </Heading>
          <Image src={image} alt={name} width={500} height={500} />
          <Table.Root mb='4'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Diet</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Favourite Food</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Favourite Toy</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Games</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell className='capitalize'>
                  {type}
                </Table.RowHeaderCell>
                <Table.Cell className='capitalize'>{diet}</Table.Cell>
                <Table.Cell className='capitalize'>
                  {favouriteFood?.name ?? 'Not Applicable'}
                </Table.Cell>
                <Table.Cell className='capitalize'>
                  {favouriteToy?.name ?? 'Not Applicable'}
                </Table.Cell>
                <Table.Cell className='capitalize'>
                  {games.join(', ')}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
          <Flex direction='column' justify='center' align='center'>
            {locations.length > 0 && (
              <Flex direction='column' m='2'>
                <Heading as='h2' align='center' mb='2'>
                  Locations
                </Heading>
                <ul>
                  {locations.map((location) => (
                    <Text key={location.name} color='gray'>
                      <li>{location.name}</li>
                    </Text>
                  ))}
                </ul>
              </Flex>
            )}
            <Flex direction='column' gap='1' m='2'>
              <Heading as='h3' size='6' align='center'>
                Slimepedia
              </Heading>
              <Box>
                <Heading as='h4' size='5'>
                  Slimeology
                </Heading>
                <Text as='p' color='gray' className='whitespace-pre-line'>
                  {slimepedia.slimeology}
                </Text>
              </Box>
              <Box>
                <Heading as='h4' size='5'>
                  Risks
                </Heading>
                <Text as='p' color='gray' className='whitespace-pre-line'>
                  {slimepedia.risks}
                </Text>
              </Box>
              <Box>
                <Heading as='h4' size='5'>
                  Plortonomics
                </Heading>
                <Text as='p' color='gray' className='whitespace-pre-line'>
                  {slimepedia.plortonomics}
                </Text>
              </Box>
            </Flex>
            {properties && (
              <Flex direction='column' m='2'>
                <Heading as='h3' size='6' align='center'>
                  Properties
                </Heading>
                <ul className='list-disc marker:text-gray-11'>
                  {properties?.map((property) => (
                    <Text color='gray' key={property} asChild>
                      <li className='max-w-prose'>{property}</li>
                    </Text>
                  ))}
                </ul>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}
