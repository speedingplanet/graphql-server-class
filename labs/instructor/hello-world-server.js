import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// GraphQL, specifically Schema Definition Language (SDL)
const typeDefs = `#graphql
	type HelloWorld {
		message: String
	}

	type Query {
		sayHello: HelloWorld
	}
`;

// Apollo
const resolvers = {
	Query: {
		sayHello: () => {
			return {
				message: 'Hello, world!',
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs, // Practically, your schema
	resolvers, // JS to implement schema responses
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

// console.log('Hello world server running at ' + url);
console.log(`Hello world server running at ${url}`);

