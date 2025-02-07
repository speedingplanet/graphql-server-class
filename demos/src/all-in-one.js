import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// GraphQL in-line schema
const typeDefs = `#graphql

type Greeting {
  content: String
}

type Query {
  helloWorld: Greeting
}
`;

// JavaScript maps an object to the GraphQL Greeting type
const greetingMessage = {
	message: "Successful test!",
};

/*
Apollo maps a set of resolvers (just one in this case)
to each of the queries
*/
const resolvers = {
	Query: {
		helloWorld: () => greetingMessage,
	},
};

/* 
Build an Apollo Server from the GraphQL type definitions
and the resolvers which resolve them
*/
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Run the HTTP server provided by Apollo
const { url } = await startStandaloneServer(server, {
	listen: { port: 3999 },
});

console.log(`🚀  Server ready at: ${url}`);
