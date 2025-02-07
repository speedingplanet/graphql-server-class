import fs from 'fs-extra';
import { resolve } from 'node:path';

const defaultDataFile = 'restaurants.json';
const defaultDataDirectory = 'restaurants-api/data';
const defaultPath = resolve('./', defaultDataDirectory, defaultDataFile);
console.log(defaultPath)

export function saveData(data, path = defaultPath) {
	fs.ensureFileSync(path);
	fs.writeJSONSync(path, data, {flag: 'w'});
	return `Data successfully written to ${path}`;
}

export function loadData(path = defaultPath) {
	let loadedData = fs.readJSONSync(path);
	return loadedData;
}
