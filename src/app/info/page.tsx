import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import CalloutComponent from '@/components/CalloutComponent';
import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeGallery from './(sections)/SlimeGallery';
import { type ISlimeGallery, allSlimesQuery } from './slimeFetch';

export default async function Info() {
  const fetchAllSlimes = await graphqlFetcher(allSlimesQuery);
  const slimes: ISlimeGallery[] = fetchAllSlimes.data.slimes;

  return (
    <Container width='auto'>
      <Flex direction='column' align='center' justify='center' mt='4'>
        <Heading as='h1' size='8' align='center'>
          Slime Rancher Info
        </Heading>
        <Section size='1'>
          <Flex direction='column' align='center' justify='center'>
            <Text align='center'>
              This is a page for visually displaying the Slime Rancher API's
              data.
            </Text>
            <Text align='center'>
              It can also be a handy way to look up information!
            </Text>
          </Flex>
        </Section>
      </Flex>
      <SlimeGallery slimes={slimes} />
    </Container>
  );
}
