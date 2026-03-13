import { defineComponents, extractComponentMeta, extractPlaygroundConfigs } from '../definitions';
import { buttonDefinition } from './button';
import { inputDefinition } from './input';
import { textareaDefinition } from './text-area';
import { searchDefinition } from './search';
import { selectDefinition } from './select';
import { checkboxDefinition } from './checkbox';
import { radioDefinition } from './radio';
import { switchDefinition } from './switch';
import { iconbuttonDefinition } from './icon-button';
import { fileuploadDefinition } from './file-upload';
import { multiselectDefinition } from './multi-select';
import { sliderDefinition } from './slider';
import { datepickerDefinition } from './date-picker';

export const formsDefinitions = defineComponents({
  'button': buttonDefinition,
  'input': inputDefinition,
  'text-area': textareaDefinition,
  'search': searchDefinition,
  'select': selectDefinition,
  'checkbox': checkboxDefinition,
  'radio': radioDefinition,
  'switch': switchDefinition,
  'icon-button': iconbuttonDefinition,
  'file-upload': fileuploadDefinition,
  'multi-select': multiselectDefinition,
  'slider': sliderDefinition,
  'date-picker': datepickerDefinition,
});

export const formsMeta = extractComponentMeta(formsDefinitions);

export const formsPlaygrounds = extractPlaygroundConfigs(formsDefinitions);
