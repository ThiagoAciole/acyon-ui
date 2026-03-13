import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { alertDefinition } from './alert';
import { loaderDefinition } from './loader';
import { progressDefinition } from './progress';
import { skeletonDefinition } from './skeleton';
import { toastDefinition } from './toast';

export const feedbackDefinitions = defineComponents({
  'alert': alertDefinition,
  'loader': loaderDefinition,
  'progress': progressDefinition,
  'skeleton': skeletonDefinition,
  'toast': toastDefinition,
});

export const feedbackMeta = extractComponentMeta(feedbackDefinitions);

export const feedbackPlaygrounds = extractPlaygroundConfigs(feedbackDefinitions);
