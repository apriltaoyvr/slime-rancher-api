import graphqlFetcher from '@/lib/gqlFetcher';
import LocationGallery from './gallery';
import { allLocationsQuery, type ILocationGalleryFetch } from './locationFetch';

export default async function SlimesPage() {
  const fetchAllLocations: ILocationGalleryFetch =
    await graphqlFetcher(allLocationsQuery);
  const locations = fetchAllLocations.data.locations;

  return <LocationGallery locations={locations} />;
}
