import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type CodePlaygroundProps = { children: string; size: 'small' | 'medium' | 'large'; weight: 'normal' | 'medium' | 'semibold' | 'bold'; block: boolean };

export const codeDefinition = {
  id: 'code',
  name: 'Code',
  category: 'typography',
  icon: 'code',
  description: 'Estilo inline para snippets e tokens tecnicos.',
      imports: ['Code'],
      initialProps: { children: 'npm install acyon', size: 'small', weight: 'medium', block: false },
      controls: [
        { type: 'textarea', name: 'children', label: 'Content', placeholder: 'npm install acyon' },
        { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
        { type: 'select', name: 'weight', label: 'Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
        { type: 'boolean', name: 'block', label: 'Block' },
      ],
      render: (props: CodePlaygroundProps) => <Labs.Code size={props.size} weight={props.weight} block={Boolean(props.block)}>{props.children}</Labs.Code>,
      generateCode: (props) => wrapSnippet(['Code'], [
        'return (',
        `  ${buildOpeningTag('Code', { size: props.size, weight: props.weight, block: props.block })}>${props.children}</Code>`,
        ');',
      ]),
    
} satisfies ComponentDefinition<CodePlaygroundProps>;
