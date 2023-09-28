import {
  Container,
  Card,
  Box,
  Flex,
  Section,
  Heading,
  Text,
  Grid,
} from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import graphqlFetcher from '@/lib/gqlFetcher';
import { type IFetchRes, singleLocationQuery } from './query';

export default async function SlimePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res: IFetchRes = await graphqlFetcher(singleLocationQuery, {
    locationId: slug,
  });

  const { id, name, image, slimepedia, slimes, foods } = res.data.locations[0];

  return (
    <Container>
      <Card m='2'>
        <Flex direction='column' justify='center' align='center'>
          <Section size='1'>
            <Heading as='h1' align='center' size='8'>
              {name}
            </Heading>
            <Heading as='h2' align='center' size='7' color='gray'>
              {id}
            </Heading>
          </Section>
          <Section size='1'>
            <Image src={image} alt={name} width={250} height={250} />
          </Section>
          {slimes && foods && (
            <Section size='1'>
              <Grid columns='2' justify='center' align='start'>
                {slimes?.length > 0 && (
                  <Flex direction='column' m='2'>
                    <Heading as='h2' align='center' mb='2'>
                      Locations
                    </Heading>
                    <ul>
                      {slimes.map((slime) => (
                        <Text key={slime.name} color='gray'>
                          <Link
                            href={`/info/slime/${slime.id}`}
                            className='rt-Link'
                            data-accent-color='ruby'
                          >
                            <li>{slime.name}</li>
                          </Link>
                        </Text>
                      ))}
                    </ul>
                  </Flex>
                )}
                {foods?.length > 0 && (
                  <Flex direction='column' m='2'>
                    <Heading as='h2' align='center' mb='2'>
                      Foods
                    </Heading>
                    <ul>
                      {foods.map((food) => (
                        <Text key={food.name} color='gray'>
                          <Link
                            href={`/info/food/${food.id}`}
                            className='rt-Link'
                            data-accent-color='ruby'
                          >
                            <li>{food.name}</li>
                          </Link>
                        </Text>
                      ))}
                    </ul>
                  </Flex>
                )}
              </Grid>
            </Section>
          )}
          <Section size='1'>
            <Flex direction='column' justify='center' gap='1' m='2'>
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
            </Flex>
          </Section>
        </Flex>
      </Card>
    </Container>
  );
}
