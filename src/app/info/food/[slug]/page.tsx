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
import { type IFetchRes, singleFoodQuery } from './query';

export default async function SlimePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res: IFetchRes = await graphqlFetcher(singleFoodQuery, {
    foodId: slug,
  });

  const {
    id,
    name,
    image,
    type,
    favouredBy,
    slimepedia,
    locations,
  } = res.data.foods[0];

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
          <Image src={image} alt={name} width={250} height={250} />
          <Table.Root mb='4'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Favoured By</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell className='capitalize'>
                  {type}
                </Table.RowHeaderCell>
                <Table.Cell className='capitalize'>
                  {favouredBy?.name ?? 'Not Applicable'}
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
                  About
                </Heading>
                <Text as='p' color='gray' className='whitespace-pre-line'>
                  {slimepedia.about}
                </Text>
              </Box>
              <Box>
                <Heading as='h4' size='5'>
                  On the Ranch
                </Heading>
                <Text as='p' color='gray' className='whitespace-pre-line'>
                  {slimepedia.ranch}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}
