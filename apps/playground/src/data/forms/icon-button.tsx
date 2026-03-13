import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type IconButtonPlaygroundProps = Pick<Labs.IconButtonProps, 'variant' | 'color' | 'size' | 'disabled'> & { label: string };

export const iconbuttonDefinition = {
  id: 'icon-button',
  name: 'IconButton',
  category: 'forms',
  icon: 'mouse-pointer',
  description: 'Botao compacto orientado por iconografia.',
  imports: ['IconButton', 'UploadIcon'],
  initialProps: { variant: 'solid', color: 'primary', size: 'medium', disabled: false, label: 'Enviar' },
  controls: [
    { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Solid', value: 'solid' }, { label: 'Soft', value: 'soft' }, { label: 'Ghost', value: 'ghost' }, { label: 'Outline', value: 'outline' }] },
    { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Enviar' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: IconButtonPlaygroundProps) => <Labs.IconButton icon={<Labs.UploadIcon size={16} />} label={props.label} variant={props.variant} color={props.color} size={props.size} disabled={Boolean(props.disabled)} />,
  generateCode: (props) => wrapSnippet(['IconButton', 'UploadIcon'], [
    'return (',
    `  ${buildOpeningTag('IconButton', { variant: props.variant, color: props.color, size: props.size, disabled: props.disabled, label: props.label })}`,
    '    icon={<UploadIcon size={16} />}',
    '  />',
    ');',
  ]),

} satisfies ComponentDefinition<IconButtonPlaygroundProps>;
