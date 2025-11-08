import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} from '@apollo/server/plugin/landingPage/default';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { builder } from '@/lib/graphql/builder';
import '@/lib/graphql/types';

const schema = builder.toSchema();

const defaultLandingPageSettings = {
  document: `query ExampleQuery {
                    slimes {
                      id
                      name
                      type
                      diet
                    }
                    locations {
                      id
                      name
                    }
                  }`,
  embed: true,
  footer: false,
};

const server = new ApolloServer({
  schema,
  introspection: true,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          ...defaultLandingPageSettings,
          graphRef: 'slime-rancher@current',
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
