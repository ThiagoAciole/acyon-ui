import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type BadgePlaygroundProps = Pick<Labs.BadgeProps, 'variant' | 'color' | 'size'> & { children: string };

export const badgeDefinition = {
  id: 'badge',
  name: 'Badge',
  category: 'data-display',
  icon: 'badge',
  description: 'Indicadores compactos para status e taxonomia.',
      imports: ['Badge'],
      initialProps: { variant: 'soft', color: 'primary', size: 'medium', children: 'Beta' },
      controls: [
        { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Solid', value: 'solid' }, { label: 'Outline', value: 'outline' }] },
        { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
        { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
        { type: 'text', name: 'children', label: 'Text', placeholder: 'Beta' },
      ],
      render: (props: BadgePlaygroundProps) => <Labs.Badge variant={props.variant} color={props.color} size={props.size}>{String(props.children ?? '')}</Labs.Badge>,
      generateCode: (props) => wrapSnippet(['Badge'], [
        'return (',
        `  ${buildOpeningTag('Badge', { variant: props.variant, color: props.color, size: props.size })}>${props.children}</Badge>`,
        ');',
      ]),
    
} satisfies ComponentDefinition<BadgePlaygroundProps>;
