import { loadData, saveData } from './persistence-utilities.js';

export const resolvers = {
	Query: {
		test: () => 'Restaurants API success',
		loadData: () => {
			backupData();
			let loadedData = loadData();
			data = loadedData;
			return 'Data successfully loaded from file';
		},
		saveData: () => {
			return saveData(data);
		},
		// implement code to return an array of Restaurant objects
		restaurants: getAllRestaurants,
	},
};

function getAllRestaurants() {
	return data.restaurants;
}

let data = {
	restaurants: [
		{
			id: '1',
			name: 'Stamna Taverna',
			description: 'Good Greek food',
			addressId: 4,
		},
		{
			id: '2',
			name: "Kim's Sushi",
			addressId: 2,
		},
		{
			id: '3',
			name: "Ruthie's BBQ",
			addressId: 20
		},
	],
	addresses: [
		{
			id: 2,
			street: '500 Eagle Rock Ave',
			city: 'West Orange',
			state: 'NJ',
			zip: '07293',
		},
		{
			id: 4,
			street: '123 Broad St',
			city: 'Bloomfield',
			state: 'NJ',
			zip: '07432',
		},
		{
			id: 20,
			street: '44 State St',
			city: 'Armonk',
			state: 'NY',
			zip: '10032',
		},
	],
	// Like a join table
	// restaurantsAddresses: [
	// 	{restaurantId: 2, addressId: 2},
	// 	{restaurantId: 10, addressId: 4},
	// 	{restaurantId: 10, addressId: 8},
	// 	{restaurantId: 2, addressId: 2},
	// ],
	menuItems: [],
};

// eslint-disable-next-line no-unused-vars
let dataBackup = {};

function backupData() {
	dataBackup = structuredClone(data);
	return 'Data successfully backed up in memory';
}
