import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { drawerDefinition } from './drawer';
import { dropdownDefinition } from './dropdown';
import { modalDefinition } from './modal';
import { tooltipDefinition } from './tooltip';

export const overlayDefinitions = defineComponents({
  modal: modalDefinition,
  drawer: drawerDefinition,
  dropdown: dropdownDefinition,
  tooltip: tooltipDefinition,
});

export const overlayMeta = extractComponentMeta(overlayDefinitions);

export const overlayPlaygrounds = extractPlaygroundConfigs(overlayDefinitions);
