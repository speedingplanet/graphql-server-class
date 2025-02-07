import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadSchema } from './src/load-schema.js';
import { resolvers } from './src/demos-resolvers.js';

const typeDefs = loadSchema('src/demos-schema.graphql');
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 3999 },
});

console.log(`🚀  Server ready at: ${url}`);
