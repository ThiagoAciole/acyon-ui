import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ButtonPlaygroundProps = Pick<Labs.ButtonProps, 'variant' | 'color' | 'size' | 'full' | 'loading'> & { children: string };

export const buttonDefinition = {
  id: 'button',
  name: 'Button',
  category: 'forms',
  icon: 'rectangle-horizontal',
  description: 'Acionador principal para acoes e comandos.',
  imports: ['Button'],
  initialProps: { variant: 'solid', color: 'primary', size: 'medium', full: false, loading: false, children: 'Click me' },
  controls: [
    {
      type: 'select', name: 'variant', label: 'Variant', options: [
        { label: 'Solid', value: 'solid' },
        { label: 'Soft', value: 'soft' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Outline', value: 'outline' },
      ]
    },
    {
      type: 'select', name: 'color', label: 'Color', options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Neutral', value: 'neutral' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' },
      ]
    },
    {
      type: 'select', name: 'size', label: 'Size', options: [
        { label: 'ExtraSmall', value: 'extraSmall' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'ExtraLarge', value: 'extraLarge' },
      ]
    },
    { type: 'text', name: 'children', label: 'Label', placeholder: 'Click me' },
    { type: 'boolean', name: 'full', label: 'Full Width' },
    { type: 'boolean', name: 'loading', label: 'Loading' },
  ],
  render: (props: ButtonPlaygroundProps) => <Labs.Button variant={props.variant} color={props.color} size={props.size} full={Boolean(props.full)} loading={Boolean(props.loading)}>{String(props.children ?? '')}</Labs.Button>,
  generateCode: (props) => wrapSnippet(['Button'], [
    'return (',
    `  ${buildOpeningTag('Button', { variant: props.variant, color: props.color, size: props.size, full: props.full, loading: props.loading })}>`,
    `    ${props.children}`,
    '  </Button>',
    ');',
  ]),

} satisfies ComponentDefinition<ButtonPlaygroundProps>;
