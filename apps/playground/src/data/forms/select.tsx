import * as Labs from '@aciole/acyon';
import { SelectPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SelectPlaygroundProps = Pick<Labs.SelectProps, 'label' | 'value' | 'placeholder' | 'disabled'>;

export const selectDefinition = {
  id: 'select',
  name: 'Select',
  category: 'forms',
  icon: 'list-filter',
  description: 'Selecao simples em lista.',
  imports: ['Select'],
  initialProps: { label: 'Area', placeholder: 'Escolha uma area', value: 'design', disabled: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Area' },
    { type: 'select', name: 'value', label: 'Value', options: [{ label: 'Design', value: 'design' }, { label: 'Engineering', value: 'engineering' }, { label: 'Product', value: 'product' }] },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha uma area' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: SelectPlaygroundProps) => <SelectPreview {...props} />,
  generateCode: (props) => wrapSnippet(['Select'], [
    'return (',
    '  <Select',
    `    label="${props.label}"`,
    '    options={[',
    "      { label: 'Design', value: 'design' },",
    "      { label: 'Engineering', value: 'engineering' },",
    "      { label: 'Product', value: 'product' },",
    '    ]}',
    `    value="${props.value}"`,
    `    placeholder="${props.placeholder}"`,
    `${props.disabled ? '    disabled' : ''}`,
    '  />',
    ');',
  ].filter(Boolean)),

} satisfies ComponentDefinition<SelectPlaygroundProps>;
