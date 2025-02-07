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
	},
};

let data = {
	restaurants: [],
	addresses: [],
	menuItems: [],
};

// eslint-disable-next-line no-unused-vars
let dataBackup = {};

function backupData() {
	dataBackup = structuredClone(data);
	return 'Data successfully backed up in memory';
}
