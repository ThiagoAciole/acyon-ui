import * as Labs from '@aciole/acyon';
import { buildOpeningTag, RadioPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type RadioPlaygroundProps = Pick<Labs.RadioProps, 'label' | 'checked' | 'disabled'>;

export const radioDefinition = {
  id: 'radio',
  name: 'Radio',
  category: 'forms',
  icon: 'circle-dot',
  description: 'Selecao exclusiva entre opcoes.',
  imports: ['Radio'],
  initialProps: { label: 'Mensal', checked: true, disabled: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Mensal' },
    { type: 'boolean', name: 'checked', label: 'Checked' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: RadioPlaygroundProps) => <RadioPreview {...props} />,
  generateCode: (props) => wrapSnippet(['Radio'], [
    'return (',
    `  ${buildOpeningTag('Radio', { ...props, name: 'preview-radio' } as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<RadioPlaygroundProps>;
