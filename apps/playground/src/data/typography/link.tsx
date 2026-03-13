import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type LinkPlaygroundProps = Pick<Labs.LinkOwnProps, 'color' | 'underline'> & { href: string; children: string };

export const linkDefinition = {
  id: 'link',
  name: 'Link',
  category: 'typography',
  icon: 'link',
  description: 'Links com semantica e estilo consistentes.',
      imports: ['Link'],
      initialProps: { href: '#/button', color: 'primary', underline: false, children: 'Abrir Button' },
      controls: [
        { type: 'text', name: 'href', label: 'Href', placeholder: '#/button' },
        { type: 'select', name: 'color', label: 'Color', options: [{ label: 'Primary', value: 'primary' }, { label: 'Neutral', value: 'neutral' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
        { type: 'boolean', name: 'underline', label: 'Underline' },
        { type: 'text', name: 'children', label: 'Text', placeholder: 'Abrir Button' },
      ],
      render: (props: LinkPlaygroundProps) => <Labs.Link href={String(props.href ?? '#')} color={props.color} underline={Boolean(props.underline)}>{String(props.children ?? '')}</Labs.Link>,
      generateCode: (props) => wrapSnippet(['Link'], [
        'return (',
        `  ${buildOpeningTag('Link', { href: props.href, color: props.color, underline: props.underline })}>${props.children}</Link>`,
        ');',
      ]),
    
} satisfies ComponentDefinition<LinkPlaygroundProps>;
