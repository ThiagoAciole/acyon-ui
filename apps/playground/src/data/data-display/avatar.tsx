import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type AvatarPlaygroundProps = Pick<Labs.AvatarProps, 'name' | 'src' | 'size' | 'status'>;

export const avatarDefinition = {
  id: 'avatar',
  name: 'Avatar',
  category: 'data-display',
  icon: 'user-circle',
  description: 'Representacao visual de pessoas e entidades.',
      imports: ['Avatar'],
      initialProps: {
        name: 'Thiago Aciole',
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
        size: 'medium',
        status: 'online',
      },
      controls: [
        {
          type: 'select', name: 'size', label: 'Size', options: [
            { label: 'ExtraSmall', value: 'extraSmall' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'ExtraLarge', value: 'extraLarge' },
          ]
        },
        {
          type: 'select', name: 'status', label: 'Status', options: [
            { label: 'Online', value: 'online' },
            { label: 'Offline', value: 'offline' },
            { label: 'Away', value: 'away' },
            { label: 'Busy', value: 'busy' },
          ]
        },
        { type: 'text', name: 'name', label: 'Name', placeholder: 'Thiago Aciole' },
        { type: 'text', name: 'src', label: 'Src', placeholder: 'https://...' },
      ],
      render: (props: AvatarPlaygroundProps) => <Labs.Avatar {...props} />,
      generateCode: (props) => wrapSnippet(['Avatar'], [
        'return (',
        `  ${buildOpeningTag('Avatar', props as Record<string, unknown>)} />`,
        ');',
      ]),
    
} satisfies ComponentDefinition<AvatarPlaygroundProps>;
