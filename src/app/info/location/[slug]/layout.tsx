import { Metadata, ResolvingMetadata } from 'next';
import graphqlFetcher from '@/lib/gqlFetcher';
import { type IFetchRes, singleLocationQuery } from './query';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  const res: IFetchRes = await graphqlFetcher(singleLocationQuery, {
    locationId: params.slug,
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const { name, image } = res.data.locations[0];

  return {
    title: name + ' | Locations',
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
