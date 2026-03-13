import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TooltipPlaygroundProps = { content: string; placement: 'top' | 'bottom' | 'left' | 'right'; buttonLabel: string };

export const tooltipDefinition = {
  id: 'tooltip',
  name: 'Tooltip',
  category: 'overlay',
  icon: 'message-circle',
  description: 'Ajuda contextual em hover ou foco.',
      imports: ['Tooltip', 'Button'],
      initialProps: { content: 'Detalhe adicional', placement: 'top', buttonLabel: 'Passe o mouse' },
      controls: [
        { type: 'text', name: 'content', label: 'Content', placeholder: 'Detalhe adicional' },
        { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
        { type: 'text', name: 'buttonLabel', label: 'Button label', placeholder: 'Passe o mouse' },
      ],
      render: (props: TooltipPlaygroundProps) => <Labs.Tooltip content={props.content} placement={props.placement}><Labs.Button variant="outline">{props.buttonLabel}</Labs.Button></Labs.Tooltip>,
      generateCode: (props) => wrapSnippet(['Tooltip', 'Button'], [
        'return (',
        `  <Tooltip content="${props.content}" placement="${props.placement}">`,
        `    <Button variant="outline">${props.buttonLabel}</Button>`,
        '  </Tooltip>',
        ');',
      ]),
    
} satisfies ComponentDefinition<TooltipPlaygroundProps>;
