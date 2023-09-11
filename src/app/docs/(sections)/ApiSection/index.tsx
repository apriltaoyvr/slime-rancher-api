import { Section, Heading, Table } from '@radix-ui/themes';
import Link from 'next/link';

export default function ApiSection() {
  return (
    <Section id='api' size='2'>
      <Heading as='h2' size='7' align='center'>
        <Link href='/api' className='rt-Link rt-underline-auto'>
          RESTful API
        </Link>
      </Heading>
      <Section size='1'>
        <Heading as='h3' align='center' mb='4'>
          Endpoints
        </Heading>
        <Table.Root variant='surface'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Method</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Endpoint</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Resource List</Table.RowHeaderCell>
              <Table.Cell>GET</Table.Cell>
              <Table.Cell>{`https://slime-rancher.vercel.app/api/`}</Table.Cell>
              <Table.Cell>Returns all resource lists as an array</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>Slime</Table.RowHeaderCell>
              <Table.Cell>GET</Table.Cell>
              <Table.Cell>{`https://slime-rancher.vercel.app/api/slime/{slime id}`}</Table.Cell>
              <Table.Cell>
                Returns all slimes. If appended with a slime's id, returns only
                that slime's info.
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Food</Table.RowHeaderCell>
              <Table.Cell>GET</Table.Cell>
              <Table.Cell>{`https://slime-rancher.vercel.app/api/food/{food id}`}</Table.Cell>
              <Table.Cell>
                Returns all foods. If appended with a food's id, returns only
                that food's info.
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Location</Table.RowHeaderCell>
              <Table.Cell>GET</Table.Cell>
              <Table.Cell>{`https://slime-rancher.vercel.app/api/location/{location id}`}</Table.Cell>
              <Table.Cell>
                Returns all locations. If appended with a location's id, returns
                only that location's info.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>Toy</Table.RowHeaderCell>
              <Table.Cell>GET</Table.Cell>
              <Table.Cell>{`https://slime-rancher.vercel.app/api/toy/{toy id}`}</Table.Cell>
              <Table.Cell>
                Returns all toys. If appended with a toy's id, returns only that
                toy's info.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>
    </Section>
  );
}
