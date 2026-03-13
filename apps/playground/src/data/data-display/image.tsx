import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ImagePlaygroundProps = { src: string; alt: string; objectFit: 'cover' | 'contain' | 'fill'; radius: 'none' | 'sm' | 'md' | 'lg' | 'full' };

export const imageDefinition = {
  id: 'image',
  name: 'Image',
  category: 'data-display',
  icon: 'image',
  description: 'Renderizacao de imagens com estilos padronizados.',
      imports: ['Box', 'Image'],
      initialProps: { src: 'https://picsum.photos/400/240', alt: 'Exemplo', objectFit: 'cover', radius: 'md' },
      controls: [
        { type: 'text', name: 'src', label: 'Src', placeholder: 'https://picsum.photos/400/240' },
        { type: 'text', name: 'alt', label: 'Alt', placeholder: 'Exemplo' },
        { type: 'select', name: 'objectFit', label: 'Object fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }, { label: 'Fill', value: 'fill' }] },
        { type: 'select', name: 'radius', label: 'Radius', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'Full', value: 'full' }] },
      ],
      render: (props: ImagePlaygroundProps) => <Labs.Box style={{ width: 320, height: 180 }}><Labs.Image src={props.src} alt={props.alt} objectFit={props.objectFit} radius={props.radius} /></Labs.Box>,
      generateCode: (props) => wrapSnippet(['Box', 'Image'], [
        'return (',
        '  <Box style={{ width: 320, height: 180 }}>',
        `    <Image src="${props.src}" alt="${props.alt}" objectFit="${props.objectFit}" radius="${props.radius}" />`,
        '  </Box>',
        ');',
      ]),
    
} satisfies ComponentDefinition<ImagePlaygroundProps>;
