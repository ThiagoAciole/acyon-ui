import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { boxDefinition } from './box';
import { containerDefinition } from './container';
import { dividerDefinition } from './divider';
import { flexDefinition } from './flex';
import { gridDefinition } from './grid';
import { pageheaderDefinition } from './page-header';
import { sidebarDefinition } from './sidebar';
import { spacerDefinition } from './spacer';

export const layoutDefinitions = defineComponents({
  'box': boxDefinition,
  'container': containerDefinition,
  'divider': dividerDefinition,
  'flex': flexDefinition,
  'grid': gridDefinition,
  'page-header': pageheaderDefinition,
  'sidebar': sidebarDefinition,
  'spacer': spacerDefinition,
});

export const layoutMeta = extractComponentMeta(layoutDefinitions);

export const layoutPlaygrounds = extractPlaygroundConfigs(layoutDefinitions);
