import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ContainerPlaygroundProps = { size: 'small' | 'medium' | 'large' | 'extraLarge' | 'full'; children: string };

export const containerDefinition = {
  id: 'container',
  name: 'Container',
  category: 'layout',
  icon: 'box',
  description: 'Limita largura e centraliza conteudo.',
  imports: ['Container', 'Text'],
  initialProps: { size: 'medium', children: 'Area de container.' },
  controls: [
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }, { label: 'Full', value: 'full' }] },
    { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Area de container.' },
  ],
  render: (props: ContainerPlaygroundProps) => <Labs.Container size={props.size}><Labs.Text>{props.children}</Labs.Text></Labs.Container>,
  generateCode: (props) => wrapSnippet(['Container', 'Text'], [
    'return (',
    `  <Container size="${props.size}"><Text>${props.children}</Text></Container>`,
    ');',
  ]),

} satisfies ComponentDefinition<ContainerPlaygroundProps>;
