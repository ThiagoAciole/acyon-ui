import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TagPlaygroundProps = Pick<Labs.TagProps, 'variant' | 'color' | 'size' | 'closable'> & { children: string };

export const tagDefinition = {
  id: 'tag',
  name: 'Tag',
  category: 'data-display',
  icon: 'tag',
  description: 'Rotulos compactos para categorizacao.',
      imports: ['Tag'],
      initialProps: { variant: 'soft', color: 'primary', size: 'medium', children: 'Design System', closable: false },
      controls: [
        { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Soft', value: 'soft' }, { label: 'Outline', value: 'outline' }] },
        { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
        { type: 'select', name: 'size', label: 'Size', options: [{ label: 'ExtraSmall', value: 'extraSmall' }, { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
        { type: 'text', name: 'children', label: 'Text', placeholder: 'Design System' },
        { type: 'boolean', name: 'closable', label: 'Closable' },
      ],
      render: (props: TagPlaygroundProps) => <Labs.Tag variant={props.variant} color={props.color} size={props.size} closable={Boolean(props.closable)}>{String(props.children ?? '')}</Labs.Tag>,
      generateCode: (props) => wrapSnippet(['Tag'], [
        'return (',
        `  ${buildOpeningTag('Tag', { variant: props.variant, color: props.color, size: props.size, closable: props.closable })}>${props.children}</Tag>`,
        ');',
      ]),
    
} satisfies ComponentDefinition<TagPlaygroundProps>;
