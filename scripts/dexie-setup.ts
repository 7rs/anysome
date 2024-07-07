import { Dexie } from 'dexie';
import type { EntityTable } from 'dexie';

import type { Stacks } from './stack-meta.ts';

export const schemaName = 'anysomeMain';
export const stacksTable = ['id', 'description', 'icon', 'url'].join(',');

export const dexieClient = new Dexie(schemaName) as Dexie & {
  stacks: EntityTable<Stacks>;
};
dexieClient.version(1).stores({ stacks: stacksTable });
