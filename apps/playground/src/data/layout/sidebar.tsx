import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SidebarPlaygroundProps = { collapsed: boolean; groupTitle: string };

export const sidebarDefinition = {
  id: 'sidebar',
  name: 'Sidebar',
  category: 'layout',
  icon: 'panel-left',
  description: 'Estrutura lateral para navegacao persistente.',
  imports: ['Icon', 'Sidebar'],
  initialProps: { collapsed: false, groupTitle: 'Navigation' },
  controls: [
    { type: 'boolean', name: 'collapsed', label: 'Collapsed' },
    { type: 'text', name: 'groupTitle', label: 'Group title', placeholder: 'Navigation' },
  ],
  render: (props: SidebarPlaygroundProps) => (
    <div style={{ width: props.collapsed ? 80 : 280 }}>
      <Labs.Sidebar collapsed={props.collapsed}>
        <Labs.Sidebar.Item icon={<Labs.Icon name="home" size={16} />} active>Home</Labs.Sidebar.Item>
        <Labs.Sidebar.Group title={props.groupTitle} leftIcon={<Labs.Icon name="external-link" size={16} />} defaultOpen>
          <Labs.Sidebar.Item icon={<Labs.Icon name="folder" size={16} />}>Tabs</Labs.Sidebar.Item>
          <Labs.Sidebar.Item icon={<Labs.Icon name="milestone" size={16} />}>Breadcrumb</Labs.Sidebar.Item>
        </Labs.Sidebar.Group>
      </Labs.Sidebar>
    </div>
  ),
  generateCode: (props) => wrapSnippet(['Icon', 'Sidebar'], [
    'return (',
    `  <Sidebar${props.collapsed ? ' collapsed' : ''}>`,
    '    <Sidebar.Item icon={<Icon name="home" size={16} />} active>Home</Sidebar.Item>',
    `    <Sidebar.Group title="${props.groupTitle}" leftIcon={<Icon name="external-link" size={16} />} defaultOpen>`,
    '      <Sidebar.Item icon={<Icon name="folder" size={16} />}>Tabs</Sidebar.Item>',
    '      <Sidebar.Item icon={<Icon name="milestone" size={16} />}>Breadcrumb</Sidebar.Item>',
    '    </Sidebar.Group>',
    '  </Sidebar>',
    ');',
  ]),

} satisfies ComponentDefinition<SidebarPlaygroundProps>;
