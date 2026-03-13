import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ListPlaygroundProps = { variant: 'default' | 'divided' | 'checklist'; activeItem: 'none' | 'first' | 'second' };

export const listDefinition = {
  id: 'list',
  name: 'List',
  category: 'data-display',
  icon: 'list',
  description: 'Agrupamento vertical de itens relacionados.',
      imports: ['List'],
      initialProps: { variant: 'divided', activeItem: 'second' },
      controls: [
        { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Divided', value: 'divided' }, { label: 'Checklist', value: 'checklist' }] },
        { type: 'select', name: 'activeItem', label: 'Active item', options: [{ label: 'None', value: 'none' }, { label: 'First', value: 'first' }, { label: 'Second', value: 'second' }] },
      ],
      render: (props: ListPlaygroundProps) => (
        <Labs.List variant={props.variant}>
          <Labs.List.Item active={props.activeItem === 'first'} description="Descricao do item">Primeiro item</Labs.List.Item>
          <Labs.List.Item active={props.activeItem === 'second'} description="Descricao do item">Segundo item</Labs.List.Item>
          <Labs.List.Item description="Descricao do item">Terceiro item</Labs.List.Item>
        </Labs.List>
      ),
      generateCode: (props) => wrapSnippet(['List'], [
        'return (',
        `  <List variant="${props.variant}">`,
        `    <List.Item${props.activeItem === 'first' ? ' active' : ''} description="Descricao do item">Primeiro item</List.Item>`,
        `    <List.Item${props.activeItem === 'second' ? ' active' : ''} description="Descricao do item">Segundo item</List.Item>`,
        '    <List.Item description="Descricao do item">Terceiro item</List.Item>',
        '  </List>',
        ');',
      ]),
    
} satisfies ComponentDefinition<ListPlaygroundProps>;
