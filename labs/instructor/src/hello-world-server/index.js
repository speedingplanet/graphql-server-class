// @ts-check
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './hello-world-resolvers.js';
import { loadSchema } from '../load-schema.js';

const typeDefs = loadSchema('./src/hello-world-server/hello-world.graphql');

const server = new ApolloServer({
	typeDefs, // Practically, your schema
	resolvers, // JS to implement schema responses
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

// console.log('Hello world server running at ' + url);
console.log(`Hello world server running at ${url}`);
