import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type CardPlaygroundProps = { title: string; description: string; content: string; variant: 'default' | 'outlined'; padding: 'sm' | 'md' | 'lg' };

export const cardDefinition = {
  id: 'card',
  name: 'Card',
  category: 'data-display',
  icon: 'panel-top',
  description: 'Container de conteudo agrupado.',
      imports: ['Card', 'CardBody', 'CardHeader', 'Text'],
      initialProps: { title: 'Card title', description: 'Descricao complementar', content: 'Conteudo de exemplo em um card.', variant: 'default', padding: 'md' },
      controls: [
        { type: 'text', name: 'title', label: 'Title', placeholder: 'Card title' },
        { type: 'text', name: 'description', label: 'Description', placeholder: 'Descricao complementar' },
        { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Conteudo de exemplo em um card.' },
        { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Outlined', value: 'outlined' }] },
        { type: 'select', name: 'padding', label: 'Padding', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      ],
      render: (props: CardPlaygroundProps) => <Labs.Card variant={props.variant} padding={props.padding}><Labs.CardHeader title={props.title} description={props.description} /><Labs.CardBody><Labs.Text>{props.content}</Labs.Text></Labs.CardBody></Labs.Card>,
      generateCode: (props) => wrapSnippet(['Card', 'CardBody', 'CardHeader', 'Text'], [
        'return (',
        `  <Card variant="${props.variant}" padding="${props.padding}">`,
        `    <CardHeader title="${props.title}" description="${props.description}" />`,
        `    <CardBody><Text>${props.content}</Text></CardBody>`,
        '  </Card>',
        ');',
      ]),
    
} satisfies ComponentDefinition<CardPlaygroundProps>;
