import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { accordionDefinition } from './accordion';
import { avatarDefinition } from './avatar';
import { badgeDefinition } from './badge';
import { cardDefinition } from './card';
import { emptystateDefinition } from './empty-state';
import { imageDefinition } from './image';
import { listDefinition } from './list';
import { tableDefinition } from './table';
import { tagDefinition } from './tag';
import { timelineDefinition } from './timeline';

export const dataDisplayDefinitions = defineComponents({
  'accordion': accordionDefinition,
  'avatar': avatarDefinition,
  'badge': badgeDefinition,
  'card': cardDefinition,
  'empty-state': emptystateDefinition,
  'image': imageDefinition,
  'list': listDefinition,
  'table': tableDefinition,
  'tag': tagDefinition,
  'timeline': timelineDefinition,
});

export const dataDisplayMeta = extractComponentMeta(dataDisplayDefinitions);

export const dataDisplayPlaygrounds = extractPlaygroundConfigs(dataDisplayDefinitions);
