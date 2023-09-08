import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import gql from 'gql-tag';
import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeGallery from '../(sections)/SlimeGallery';
import { allSlimesQuery, type ISlimeDirectory } from '../slimeFetch';

export default async function SlimesPage() {
  const fetchAllSlimes = await graphqlFetcher(allSlimesQuery);
  const slimes: ISlimeDirectory[] = fetchAllSlimes.data.slimes;

  return (
    <Container>
      <Section size='2'>
        <Heading as='h2' align='center' mb='2'>
          Slimes
        </Heading>
        <SlimeGallery slimes={slimes} />
      </Section>
    </Container>
  );
}
