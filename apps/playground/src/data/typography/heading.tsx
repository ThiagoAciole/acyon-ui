import * as Labs from '@aciole/acyon';
import * as React from 'react';
import { resolveImports, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type HeadingPlaygroundProps = { level: 'Heading' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6'; weight?: Labs.HeadingWeight; children: string };

export const headingDefinition = {
  id: 'heading',
  name: 'Heading',
  category: 'typography',
  icon: 'heading1',
  description: 'Titulos com escala tipografica consistente.',
      imports: (props) => [String(props.level ?? 'Heading')],
      initialProps: { level: 'Heading', weight: 'bold', children: 'Titulo de exemplo' },
      controls: [
        { type: 'select', name: 'level', label: 'Component', options: [{ label: 'Heading', value: 'Heading' }, { label: 'Heading2', value: 'Heading2' }, { label: 'Heading3', value: 'Heading3' }, { label: 'Heading4', value: 'Heading4' }, { label: 'Heading5', value: 'Heading5' }, { label: 'Heading6', value: 'Heading6' }] },
        { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
        { type: 'text', name: 'children', label: 'Text', placeholder: 'Titulo de exemplo' },
      ],
      render: (props: HeadingPlaygroundProps) => {
        const Component = ((Labs as unknown) as Record<string, React.ElementType>)[String(props.level)] ?? Labs.Heading;
        return <Component weight={props.weight}>{String(props.children ?? '')}</Component>;
      },
      generateCode: (props) => wrapSnippet(resolveImports((currentProps) => [String(currentProps.level ?? 'Heading')], props), [
        'return (',
        `  <${props.level} weight="${props.weight}">${props.children}</${props.level}>`,
        ');',
      ]),
    
} satisfies ComponentDefinition<HeadingPlaygroundProps>;
