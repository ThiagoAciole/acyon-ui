import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type FlexPlaygroundProps = { direction: 'row' | 'column'; align: 'flex-start' | 'center' | 'flex-end' | 'stretch'; justify: 'flex-start' | 'center' | 'flex-end' | 'space-between'; gap: '0' | '2' | '4' | '6' };

export const flexDefinition = {
  id: 'flex',
  name: 'Flex',
  category: 'layout',
  icon: 'align-horizontal',
  description: 'Layout flexivel para alinhamento e distribuicao.',
  imports: ['Badge', 'Flex'],
  initialProps: { direction: 'row', align: 'center', justify: 'flex-start', gap: '4' },
  controls: [
    { type: 'select', name: 'direction', label: 'Direction', options: [{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }] },
    { type: 'select', name: 'align', label: 'Align', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Stretch', value: 'stretch' }] },
    { type: 'select', name: 'justify', label: 'Justify', options: [{ label: 'Start', value: 'flex-start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'flex-end' }, { label: 'Space Between', value: 'space-between' }] },
    { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
  ],
  render: (props: FlexPlaygroundProps) => <Labs.Flex direction={props.direction} align={props.align} justify={props.justify} gap={props.gap}><Labs.Badge>1</Labs.Badge><Labs.Badge>2</Labs.Badge><Labs.Badge>3</Labs.Badge></Labs.Flex>,
  generateCode: (props) => wrapSnippet(['Badge', 'Flex'], [
    'return (',
    `  <Flex direction="${props.direction}" align="${props.align}" justify="${props.justify}" gap="${props.gap}">`,
    '    <Badge>1</Badge><Badge>2</Badge><Badge>3</Badge>',
    '  </Flex>',
    ');',
  ]),

} satisfies ComponentDefinition<FlexPlaygroundProps>;
