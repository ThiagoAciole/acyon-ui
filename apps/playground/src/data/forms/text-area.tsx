import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TextAreaPlaygroundProps = Pick<Labs.TextAreaProps, 'label' | 'placeholder' | 'hint' | 'disabled'>;

export const textareaDefinition = {
  id: 'text-area',
  name: 'TextArea',
  category: 'forms',
  icon: 'form-input',
  description: 'Campo multi-linha para entradas longas.',
  imports: ['TextArea'],
  initialProps: { label: 'Descricao', placeholder: 'Descreva o contexto', hint: 'Mensagem de apoio', disabled: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Descricao' },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Descreva o contexto' },
    { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Mensagem de apoio' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: TextAreaPlaygroundProps) => <Labs.TextArea label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} hint={String(props.hint ?? '')} disabled={Boolean(props.disabled)} full />,
  generateCode: (props) => wrapSnippet(['TextArea'], [
    'return (',
    `  ${buildOpeningTag('TextArea', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<TextAreaPlaygroundProps>;
