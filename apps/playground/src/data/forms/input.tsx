import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type InputPlaygroundProps = Pick<Labs.InputProps, 'label' | 'placeholder' | 'hint' | 'size' | 'disabled'>;

export const inputDefinition = {
  id: 'input',
  name: 'Input',
  category: 'forms',
  icon: 'text-cursor',
  description: 'Campo de texto padronizado.',
  imports: ['Input'],
  initialProps: { label: 'Nome', placeholder: 'Digite aqui', size: 'medium', disabled: false, hint: 'Campo de exemplo' },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Nome' },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Digite aqui' },
    { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Campo de exemplo' },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: InputPlaygroundProps) => <Labs.Input label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} hint={String(props.hint ?? '')} size={props.size} disabled={Boolean(props.disabled)} full />,
  generateCode: (props) => wrapSnippet(['Input'], [
    'return (',
    `  ${buildOpeningTag('Input', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<InputPlaygroundProps>;
