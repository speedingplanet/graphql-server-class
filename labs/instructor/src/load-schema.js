import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// This is a JSDoc comment, which hints to TypeScript that
// the function return a String
/**
 * @returns {String}
 */
export function loadSchema(path) {
	return readFileSync(resolve(process.cwd(), path));
}