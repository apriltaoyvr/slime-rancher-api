import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import gql from 'gql-tag';
import CalloutComponent from '@/components/CalloutComponent';
import fetcher from '@/lib/fetcher';
import SlimeGallery from './SlimeGallery';
import type { Diet } from '@/lib/data/enums';

export interface SlimeFetch {
  id: string;
  name: string;
  image: string;
  diet: Diet;
  favouriteToy?: { id: string; name: string };
  favouriteFood?: {
    id: string;
    name: string;
  };
  games: number[];
}

export default async function Info() {
  const allSlimesQuery = gql`
    query Query {
      slimes {
        id
        name
        image
        diet
        favouriteToy {
          id
          name
        }
        favouriteFood {
          id
          name
        }
        games
      }
    }
  `;
  const fetchAllSlimes = await fetcher(allSlimesQuery);
  const slimes: SlimeFetch[] = fetchAllSlimes.data.slimes;

  return (
    <Container>
      <Flex direction='column' align='center' justify='center'>
        <Heading as='h1' size='8' align='center' mb='2'>
          Slime Rancher Info
        </Heading>
        <CalloutComponent>This page is a work in progress.</CalloutComponent>
        <Section size='1'>
          <Text align='center'>
            This is a page for visually displaying the Slime Rancher API's data.
            It can also be a handy way to look up information!
          </Text>
        </Section>
      </Flex>
      <Section size='2'>
        <Heading as='h2' align='center' mb='2'>
          Slimes
        </Heading>
        <SlimeGallery slimes={slimes} />
      </Section>
    </Container>
  );
}
