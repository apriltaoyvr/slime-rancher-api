import graphqlFetcher from '@/lib/gqlFetcher';
import SlimeGallery from './gallery';
import { allSlimesQuery, type ISlimeGallery } from './slimeFetch';

export default async function SlimesPage() {
  const fetchAllSlimes = await graphqlFetcher(allSlimesQuery);
  const slimes: ISlimeGallery[] = fetchAllSlimes.data.slimes;

  return <SlimeGallery slimes={slimes} />;
}
