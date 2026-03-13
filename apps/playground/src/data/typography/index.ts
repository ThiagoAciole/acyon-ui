import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { codeDefinition } from './code';
import { headingDefinition } from './heading';
import { linkDefinition } from './link';
import { textDefinition } from './text';

export const typographyDefinitions = defineComponents({
  text: textDefinition,
  heading: headingDefinition,
  link: linkDefinition,
  code: codeDefinition,
});

export const typographyMeta = extractComponentMeta(typographyDefinitions);

export const typographyPlaygrounds = extractPlaygroundConfigs(typographyDefinitions);
