import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type TimelinePlaygroundProps = { firstTitle: string; secondTitle: string; thirdTitle: string };

export const timelineDefinition = {
  id: 'timeline',
  name: 'Timeline',
  category: 'data-display',
  icon: 'git-commit',
  description: 'Sequencia temporal de eventos ou etapas.',
      imports: ['Timeline', 'TimelineItem'],
      initialProps: { firstTitle: 'Criado', secondTitle: 'Em revisao', thirdTitle: 'Publicado' },
      controls: [
        { type: 'text', name: 'firstTitle', label: 'First title', placeholder: 'Criado' },
        { type: 'text', name: 'secondTitle', label: 'Second title', placeholder: 'Em revisao' },
        { type: 'text', name: 'thirdTitle', label: 'Third title', placeholder: 'Publicado' },
      ],
      render: (props: TimelinePlaygroundProps) => <Labs.Timeline><Labs.TimelineItem title={props.firstTitle} description="Primeiro evento" /><Labs.TimelineItem title={props.secondTitle} description="Segundo evento" /><Labs.TimelineItem title={props.thirdTitle} description="Terceiro evento" /></Labs.Timeline>,
      generateCode: (props) => wrapSnippet(['Timeline', 'TimelineItem'], [
        'return (',
        '  <Timeline>',
        `    <TimelineItem title="${props.firstTitle}" description="Primeiro evento" />`,
        `    <TimelineItem title="${props.secondTitle}" description="Segundo evento" />`,
        `    <TimelineItem title="${props.thirdTitle}" description="Terceiro evento" />`,
        '  </Timeline>',
        ');',
      ]),
    
} satisfies ComponentDefinition<TimelinePlaygroundProps>;
