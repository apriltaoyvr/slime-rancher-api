const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://slime-rancher.vercel.app/graphql'
    : 'http://localhost:3000/graphql';

export default async function graphqlFetcher(
  query: string,
  args: {
    slimeId?: string;
    foodId?: string;
    locationId?: string;
    toyId?: string;
  } = {},
) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { ...args },
    }),
    next: {
      revalidate: 3600
    }
  });

  return res.json();
}
