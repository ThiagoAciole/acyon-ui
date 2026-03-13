import * as Labs from '@aciole/acyon';
import { buildOpeningTag, SwitchPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SwitchPlaygroundProps = Pick<Labs.SwitchProps, 'label' | 'checked' | 'disabled' | 'size'>;

export const switchDefinition = {
  id: 'switch',
  name: 'Switch',
  category: 'forms',
  icon: 'toggle-right',
  description: 'Alternancia binaria para configuracoes.',
  imports: ['Switch'],
  initialProps: { label: 'Ativar notificacoes', checked: true, disabled: false, size: 'medium' },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Ativar notificacoes' },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }] },
    { type: 'boolean', name: 'checked', label: 'Checked' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: SwitchPlaygroundProps) => <SwitchPreview {...props} />,
  generateCode: (props) => wrapSnippet(['Switch'], [
    'return (',
    `  ${buildOpeningTag('Switch', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<SwitchPlaygroundProps>;
