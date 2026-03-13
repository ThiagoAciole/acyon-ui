import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { breadcrumbDefinition } from './breadcrumb';
import { paginationDefinition } from './pagination';
import { tabsDefinition } from './tabs';
import { topbarDefinition } from './top-bar';

export const navigationDefinitions = defineComponents({
  'breadcrumb': breadcrumbDefinition,
  'pagination': paginationDefinition,
  'tabs': tabsDefinition,
  'top-bar': topbarDefinition,
});

export const navigationMeta = extractComponentMeta(navigationDefinitions);

export const navigationPlaygrounds = extractPlaygroundConfigs(navigationDefinitions);
