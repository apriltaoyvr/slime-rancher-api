import { Container, Flex, Section, Heading, Text } from '@radix-ui/themes';
import CalloutComponent from '@/components/CalloutComponent';
import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeGallery from './(sections)/SlimeGallery';
import { type ISlimeDirectory, allSlimesQuery } from './slimeFetch';

export default async function Info() {
  const fetchAllSlimes = await graphqlFetcher(allSlimesQuery);
  const slimes: ISlimeDirectory[] = fetchAllSlimes.data.slimes;

  return (
    <Container width='auto'>
      <Flex direction='column' align='center' justify='center' mt='2'>
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
      <SlimeGallery slimes={slimes} />
    </Container>
  );
}
