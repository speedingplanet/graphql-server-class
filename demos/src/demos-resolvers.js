import { startsWithTScalar } from './custom-scalar.js';
import { filter as _filter } from 'lodash-es';

export const resolvers = {
	Query: {
		helloWorld: () => 'Welcome to the demos schema (String)',
		helloWorldObject: () => ({
			content: 'Welcome to the demos schema (Object)',
		}),
		showNullables: () => nullables,
		customResolver: () => peopleWithDatesOfBirth,
		queryWithArgs: (parent, { lastName }) => {
			console.log('Looking for lastName: ', lastName);
			return peopleWithDatesOfBirth.find((p) => p.lastName === lastName);
		},
		customScalar: () => 'Terrific!',
		customScalarError: () => 'Great!',
		people: () => peopleWithDatesOfBirth,
		searchPeople,
		searchPeopleWithCriteria,
	},
	PersonWithDateOfBirth: {
		dateOfBirth(parent) {
			if (parent.dateOfBirth instanceof Date) {
				return parent.dateOfBirth.toISOString().substring(0, 11);
			} else {
				return parent.dateOfBirth;
			}
		},
	},
	StartsWithT: startsWithTScalar,
};

function searchPeople(parent, { firstName, lastName }) {
	let searchObj = {};
	if (firstName) searchObj.firstName = firstName;
	if (lastName) searchObj.lastName = lastName;

	return _filter(peopleWithDatesOfBirth, searchObj);
}

function searchPeopleWithCriteria(parent, {criteria}) {
	return _filter(peopleWithDatesOfBirth, criteria);
}

const peopleWithDatesOfBirth = [
	{
		firstName: 'Bob',
		lastName: 'Dobalina',
		dateOfBirth: '1992-09-02',
	},

	{
		firstName: 'Ed',
		lastName: 'Franks',
		dateOfBirth: new Date(1992, 5, 10),
	},
];

const nullables = [
	{
		nullable: 'This value can be null',
		notNullable: 'This value cannot be null',
	},
	{
		notNullable: 'Not null, but no value for "nullable"',
	},
	{
		nullable: null,
		notNullable: 'Not null, explicit null value for "nullable"',
	},
	{
		nullable: undefined,
		notNullable: 'Not null, undefined value for "nullable"',
	},
	/* 	{
		nullable: 'This should break',
	},
 */
];
