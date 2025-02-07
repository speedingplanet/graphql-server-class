import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/*
Read a schema file from the filesystem into a variable. 
readFileSync synchronously reads the data from the file
resolve figures out the path to the file in question

Apollo only needs the schema to be a String to read and parse it.
*/
/**
 * @returns {String}
 */
export function loadSchema(path) {
	return readFileSync(resolve(process.cwd(), path), {encoding: 'utf-8'});
}
