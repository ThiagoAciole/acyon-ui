import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SearchPlaygroundProps = Pick<Labs.SearchProps, 'label' | 'placeholder' | 'loading'>;

export const searchDefinition = {
  id: 'search',
  name: 'Search',
  category: 'forms',
  icon: 'search',
  description: 'Campo de busca com affordance dedicada.',
  imports: ['Search'],
  initialProps: { label: 'Buscar', placeholder: 'Buscar componente', loading: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Buscar' },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Buscar componente' },
    { type: 'boolean', name: 'loading', label: 'Loading' },
  ],
  render: (props: SearchPlaygroundProps) => <Labs.Search label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} loading={Boolean(props.loading)} full />,
  generateCode: (props) => wrapSnippet(['Search'], [
    'return (',
    `  ${buildOpeningTag('Search', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<SearchPlaygroundProps>;
