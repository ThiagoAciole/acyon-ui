import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type PageHeaderPlaygroundProps = { title: string; description: string; showBack: boolean };

export const pageheaderDefinition = {
  id: 'page-header',
  name: 'PageHeader',
  category: 'layout',
  icon: 'heading1',
  description: 'Cabecalho de pagina com contexto e acoes.',
  imports: ['Button', 'PageHeader'],
  initialProps: { title: 'PageHeader', description: 'Descricao da pagina', showBack: false },
  controls: [
    { type: 'text', name: 'title', label: 'Title', placeholder: 'PageHeader' },
    { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Descricao da pagina' },
    { type: 'boolean', name: 'showBack', label: 'Show back button' },
  ],
  render: (props: PageHeaderPlaygroundProps) => <Labs.PageHeader title={props.title} description={props.description} showBack={props.showBack} action={<Labs.Button>Salvar</Labs.Button>} />,
  generateCode: (props) => wrapSnippet(['Button', 'PageHeader'], [
    'return (',
    '  <PageHeader',
    `    title="${props.title}"`,
    `    description="${props.description}"`,
    `${props.showBack ? '    showBack' : ''}`,
    '    action={<Button>Salvar</Button>}',
    '  />',
    ');',
  ].filter(Boolean)),

} satisfies ComponentDefinition<PageHeaderPlaygroundProps>;
