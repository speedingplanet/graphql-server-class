export const resolvers = {
	Query: {
		sayHello: () => {
			return {
				message: 'Hello, world!',
			};
		},
	},
}