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
	},
};

let data = {
	restaurants: [
		{
			id: '1',
			name: 'Stamna Taverna',
			description: 'Good Greek food'
		},
		{
			id: '2',
			name: 'Kim\'s Sushi'
		},
		{
			id: '3',
			name: 'Ruthie\'s BBQ'
		}
	],
	addresses: [],
	menuItems: [],
};

// eslint-disable-next-line no-unused-vars
let dataBackup = {};

function backupData() {
	dataBackup = structuredClone(data);
	return 'Data successfully backed up in memory';
}
