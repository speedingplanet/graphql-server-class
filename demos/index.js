import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

type Greeting {
  message: String
}

type Query {
  greeting: Greeting
}

`;

const greetingMessage = {
	message: "Successful test!",
};

const resolvers = {
	Query: {
		greeting: () => greetingMessage,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
