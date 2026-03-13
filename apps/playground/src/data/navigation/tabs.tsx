import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TabsPlaygroundProps = Pick<Labs.TabsProps, 'variant' | 'size'> & { defaultValue: 'overview' | 'specs' | 'usage' };

export const tabsDefinition = {
  id: 'tabs',
  name: 'Tabs',
  category: 'navigation',
  icon: 'folder',
  description: 'Alternancia entre paines relacionados.',
  imports: ['Tabs'],
  initialProps: { variant: 'default', size: 'medium', defaultValue: 'overview' },
  controls: [
    { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Pills', value: 'pills' }] },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }] },
    { type: 'select', name: 'defaultValue', label: 'Default tab', options: [{ label: 'Overview', value: 'overview' }, { label: 'Specs', value: 'specs' }, { label: 'Usage', value: 'usage' }] },
  ],
  render: (props: TabsPlaygroundProps) => <Labs.Tabs variant={props.variant} size={props.size} defaultValue={props.defaultValue} tabs={[{ value: 'overview', label: 'Overview', content: 'Visao geral' }, { value: 'specs', label: 'Specs', content: 'Especificacoes' }, { value: 'usage', label: 'Usage', content: 'Guia rapido' }]} />,
  generateCode: (props) => wrapSnippet(['Tabs'], [
    'return (',
    '  <Tabs',
    '    tabs={[',
    "      { value: 'overview', label: 'Overview', content: 'Visao geral' },",
    "      { value: 'specs', label: 'Specs', content: 'Especificacoes' },",
    "      { value: 'usage', label: 'Usage', content: 'Guia rapido' },",
    '    ]}',
    `    defaultValue="${props.defaultValue}"`,
    `    variant="${props.variant}"`,
    `    size="${props.size}"`,
    '  />',
    ');',
  ]),

} satisfies ComponentDefinition<TabsPlaygroundProps>;
