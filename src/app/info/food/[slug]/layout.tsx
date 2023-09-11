import { Metadata, ResolvingMetadata } from 'next';
import graphqlFetcher from '@/lib/gqlFetcher';
import { type IFetchRes, singleFoodQuery } from './query';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  const res: IFetchRes = await graphqlFetcher(singleFoodQuery, {
    slimeId: params.slug,
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const { name, image } = res.data.foods[0];

  return {
    title: name + ' | Foods',
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
