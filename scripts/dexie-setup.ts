import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import { Dexie } from 'dexie';
import type { EntityTable } from 'dexie';
import type { Stacks } from './stack-meta.ts';

export const schemaName = 'anysomeMain';
export const stacksTable = ['id', 'name', 'description', 'icon', 'url'].join(',');
export const version = 1;
export const jsonPath = 'public/stacks.json';

async function generateHexHashDigest(str, algorithm: AlgorithmIdentifier = 'SHA-256') {
  const disest = await crypto.subtle.digest(algorithm, new TextEncoder().encode(str));
  const disestArray = [...new Uint8Array(disest)];
  const disestStrArray = disestArray.map((b) => b.toString(16).padStart(2, '0'));

  return disestStrArray.join('');
}

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

export async function writeCollectionObject() {
  const objectStr = JSON.stringify(await getCollectionAsObject());

  fs.writeFile(path.resolve(jsonPath), objectStr, (err) => err && console.error(err));

  return await generateHexHashDigest(objectStr);
}

export const dexieClient = new Dexie(schemaName) as Dexie & {
  stacks: EntityTable<Stacks>;
};
dexieClient.version(version).stores({ stacks: stacksTable });
