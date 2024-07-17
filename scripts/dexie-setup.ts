import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { getCollection } from 'astro:content';
import { Dexie } from 'dexie';
import type { EntityTable } from 'dexie';

/**
 * The interface of objects used in Dexie.
 */
export interface Stacks {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  url: string;
}
/**
 * Columns of the table.
 */
export const stacksTable = ['++id', 'name', 'description', 'icon', 'url'].join(',');
/**
 * When the table definition changed, change the version.
 * Don't use the float or double.
 */
export const version = 1;
/**
 * The schema name.
 * This is the name in the entire IndexedDB, not Dexie.
 */
export const schemaName = 'anysomeMain';

/**
 * dexieClient is also available on client side.
 */
export const dexieClient = new Dexie(schemaName) as Dexie & { stacks: EntityTable<Stacks, 'id'> };
dexieClient.version(version).stores({ stacks: stacksTable });

export const jsonPath = 'public/stacks.json';
export const hashAlgorithm = 'SHA-256';

/**
 * Returns the string that generated as a hexadecimal hash digest.
 *
 * @param str - A string to be hashed.
 * @param algorithm - The hashing algorithm.
 * @returns The hexadecimal hash digest string.
 */
async function generateHexHashDigest(str: string, algorithm: AlgorithmIdentifier = hashAlgorithm) {
  const disest = await crypto.subtle.digest(algorithm, new TextEncoder().encode(str));
  const disestArray = [...new Uint8Array(disest)];
  const disestStrArray = disestArray.map((b) => b.toString(16).padStart(2, '0'));

  return disestStrArray.join('');
}

/**
 * Gettings the stack pages with `getCollection` and converts objects for Dexie.
 * Then returns a array of stack object.
 *
 * @returns The array of stack object.
 *
 * - [Dexie](https://docs.astro.build/en/reference/api-reference/#getcollection)
 * - [Querying Collections](https://docs.astro.build/en/guides/content-collections/#querying-collections)
 */
async function getCollectionAsObject() {
  const collection = await getCollection('stack');

  return collection.map((stack, index) => {
    return {
      id: index,
      name: stack.data.name,
      description: stack.data.description,
      icon: stack.data.icon,
      url: `/${stack.slug}`,
    } as Stacks;
  });
}

/**
 * Calls `writeCollectionObject()` and writes that object to the JSON file.
 * Then returns the hexadecimal hash digest string.
 *
 * @returns The hexadecimal hash digest string.
 */
export async function writeCollectionObject() {
  const objectStr = JSON.stringify(await getCollectionAsObject());

  fs.writeFile(path.resolve(jsonPath), objectStr, (err) => err && console.error(err));

  return await generateHexHashDigest(objectStr);
}
