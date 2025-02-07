import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

// First pass at a format
const startsWithTRegExp = new RegExp('^t', 'i');

function startsWithTValue(value) {
	console.log('parseValue');
	console.log('value: ', value);
	console.log('test: ', startsWithTRegExp.test(value))
	if (typeof value === 'string') {
		if (startsWithTRegExp.test(value)) {
			return value;
		} else {
			throw new GraphQLError('GraphQL StartsWithG scalar should start with a "t"');
		}
	}
	throw new GraphQLError('Invalid string, does not start with a T');

}

export const startsWithTScalar = new GraphQLScalarType({
	name: 'StartsWithG',
	description: 'A string that must start with the letter "t"',
	serialize: startsWithTValue,
	parseValue: startsWithTValue,
	parseLiteral(ast) {
		console.log('parseLiteral');
		console.log('value: ', ast.value);
		console.log('test: ', startsWithTRegExp.test(ast.value))
		if (ast.kind === Kind.STRING) {
			if (startsWithTRegExp.test(ast.value)) {
				return ast.value;
			}else {
				throw new GraphQLError('GraphQL StartsWithG scalar should start with a "t"');
			}
		}
		// Invalid hard-coded value (not a valid "t"-starting string)
		throw new GraphQLError('Invalid string, does not start with a T');
		// return null;
	},
});
