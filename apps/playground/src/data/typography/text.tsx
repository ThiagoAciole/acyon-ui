import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TextPlaygroundProps = Pick<Labs.TextOwnProps, 'size' | 'color' | 'weight'> & { children: string };

export const textDefinition = {
  id: 'text',
  name: 'Text',
  category: 'typography',
  icon: 'type',
  description: 'Texto base com controle de hierarquia visual.',
      imports: ['Text'],
      initialProps: { size: 'medium', color: 'default', weight: 'normal', children: 'Texto de exemplo para o playground.' },
      controls: [
        { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
        { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Default', value: 'default' }, { label: 'Neutral', value: 'neutral' }, { label: 'Inverse', value: 'inverse' }, { label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
        { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
        { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Texto de exemplo' },
      ],
      render: (props: TextPlaygroundProps) => <Labs.Text size={props.size} color={props.color} weight={props.weight}>{String(props.children ?? '')}</Labs.Text>,
      generateCode: (props) => wrapSnippet(['Text'], [
        'return (',
        `  ${buildOpeningTag('Text', { size: props.size, color: props.color, weight: props.weight })}>`,
        `    ${props.children}`,
        '  </Text>',
        ');',
      ]),
    
} satisfies ComponentDefinition<TextPlaygroundProps>;
