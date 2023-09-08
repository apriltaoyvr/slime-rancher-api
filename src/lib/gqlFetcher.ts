export default async function graphqlFetcher(
  query: string,
  args: { slimeId?: string; foodId?: string; locationId?: string } = {},
) {
  const res = await fetch('https://slime-rancher.vercel.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: {...args},
    }),
  });


  console.log(args);
  
  return res.json();
}
