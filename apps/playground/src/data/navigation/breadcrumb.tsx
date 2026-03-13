import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type BreadcrumbPlaygroundProps = { separator: '/' | '>' | '-'; currentLabel: string };

export const breadcrumbDefinition = {
  id: 'breadcrumb',
  name: 'Breadcrumb',
  category: 'navigation',
  icon: 'milestone',
  description: 'Trilha de navegacao hierarquica.',
  imports: ['Breadcrumb'],
  initialProps: { separator: '/', currentLabel: 'Breadcrumb' },
  controls: [
    { type: 'select', name: 'separator', label: 'Separator', options: [{ label: '/', value: '/' }, { label: '>', value: '>' }, { label: '-', value: '-' }] },
    { type: 'text', name: 'currentLabel', label: 'Current label', placeholder: 'Breadcrumb' },
  ],
  render: (props: BreadcrumbPlaygroundProps) => <Labs.Breadcrumb separator={props.separator} items={[{ label: 'Inicio', href: '#/' }, { label: 'Componentes' }, { label: props.currentLabel }]} />,
  generateCode: (props) => wrapSnippet(['Breadcrumb'], [
    'return (',
    '  <Breadcrumb',
    '    items={[',
    "      { label: 'Inicio', href: '#/' },",
    "      { label: 'Componentes' },",
    `      { label: '${props.currentLabel}' },`,
    '    ]}',
    `    separator="${props.separator}"`,
    '  />',
    ');',
  ]),

} satisfies ComponentDefinition<BreadcrumbPlaygroundProps>;
