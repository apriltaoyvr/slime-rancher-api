import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeGallery from '../(sections)/SlimeGallery';
import { allSlimesQuery, type ISlimeDirectory } from '../slimeFetch';

export default async function SlimesPage() {
  const fetchAllSlimes = await graphqlFetcher(allSlimesQuery);
  const slimes: ISlimeDirectory[] = fetchAllSlimes.data.slimes;

  return <SlimeGallery slimes={slimes} />;
}
