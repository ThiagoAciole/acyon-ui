import * as Labs from '@aciole/acyon';
import { buildOpeningTag, CheckboxPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type CheckboxPlaygroundProps = Pick<Labs.CheckboxProps, 'label' | 'checked' | 'disabled'>;

export const checkboxDefinition = {
  id: 'checkbox',
  name: 'Checkbox',
  category: 'forms',
  icon: 'check-square',
  description: 'Selecao booleana independente.',
  imports: ['Checkbox'],
  initialProps: { label: 'Aceitar termos', checked: true, disabled: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Aceitar termos' },
    { type: 'boolean', name: 'checked', label: 'Checked' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: CheckboxPlaygroundProps) => <CheckboxPreview {...props} />,
  generateCode: (props) => wrapSnippet(['Checkbox'], [
    'return (',
    `  ${buildOpeningTag('Checkbox', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<CheckboxPlaygroundProps>;
