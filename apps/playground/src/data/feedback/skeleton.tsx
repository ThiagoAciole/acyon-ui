import * as Labs from '@aciole/acyon';
import { buildOpeningTag, normalizeDimension, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SkeletonPlaygroundProps = { width: string; height: string; circle: boolean; animated: boolean };

export const skeletonDefinition = {
  id: 'skeleton',
  name: 'Skeleton',
  category: 'feedback',
  icon: 'component',
  description: 'Placeholder visual para carregamento de conteudo.',
      imports: ['Skeleton'],
      initialProps: { width: '100%', height: '50px', circle: false, animated: true },
      controls: [
        { type: 'text', name: 'width', label: 'Width', placeholder: '100%' },
        { type: 'text', name: 'height', label: 'Height', placeholder: '50' },
        { type: 'boolean', name: 'circle', label: 'Circle' },
        { type: 'boolean', name: 'animated', label: 'Animated' },
      ],
      render: (props: SkeletonPlaygroundProps) => (
        <div style={{ width: 320, padding: '8px 0', display: 'flex', gap: '8px' }}>
          <Labs.Skeleton
            width={normalizeDimension(props.width)}
            height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
            circle={Boolean(props.circle)}
            animated={Boolean(props.animated)}
          />
          <Labs.Skeleton
            width={normalizeDimension(props.width)}
            height={props.circle ? normalizeDimension(props.width) : normalizeDimension(props.height)}
            circle={Boolean(props.circle)}
            animated={Boolean(props.animated)}
          />
        </div>
      ),
      generateCode: (props) => wrapSnippet(['Skeleton'], [
        'return (',
        `  ${buildOpeningTag('Skeleton', { width: normalizeDimension(props.width), height: props.circle ? undefined : normalizeDimension(props.height), circle: props.circle, animated: props.animated })} />`,
        ');',
      ]),
    
} satisfies ComponentDefinition<SkeletonPlaygroundProps>;
