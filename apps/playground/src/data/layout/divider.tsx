import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type DividerPlaygroundProps = { orientation: 'horizontal' | 'vertical'; label: string };

export const dividerDefinition = {
  id: 'divider',
  name: 'Divider',
  category: 'layout',
  icon: 'minus',
  description: 'Separador visual entre blocos relacionados.',
  imports: ['Divider', 'Flex', 'Text'],
  initialProps: { orientation: 'horizontal', label: '' },
  controls: [
    { type: 'select', name: 'orientation', label: 'Orientation', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Ou' },
  ],
  render: (props: DividerPlaygroundProps) => props.orientation === 'horizontal'
    ? <Labs.Flex direction="column" gap="3"><Labs.Text>Secao A</Labs.Text><Labs.Divider orientation="horizontal" label={props.label || undefined} /><Labs.Text>Secao B</Labs.Text></Labs.Flex>
    : <Labs.Flex align="center" gap="3"><Labs.Text>A</Labs.Text><Labs.Divider orientation="vertical" /><Labs.Text>B</Labs.Text></Labs.Flex>,
  generateCode: (props) => wrapSnippet(['Divider'], [
    'return (',
    `  <Divider orientation="${props.orientation}"${props.label ? ` label="${props.label}"` : ''} />`,
    ');',
  ]),

} satisfies ComponentDefinition<DividerPlaygroundProps>;
