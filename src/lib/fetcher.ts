export default async function fetcher(
  query: string,
  args: { id?: string } = {},
) {
  const data = fetch('https://slime-rancher.vercel.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: args,
    }),
  })
    

  return (data.then((res) => res.json()));
}
