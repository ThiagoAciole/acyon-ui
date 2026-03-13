import { PaginationPreview } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type PaginationPlaygroundProps = { currentPage: string; totalPages: string; showControls: boolean };

export const paginationDefinition = {
  id: 'pagination',
  name: 'Pagination',
  category: 'navigation',
  icon: 'more-horizontal',
  description: 'Navegacao paginada entre colecoes.',
  imports: ['Pagination'],
  initialProps: { currentPage: '2', totalPages: '8', showControls: true },
  controls: [
    { type: 'text', name: 'currentPage', label: 'Current page', placeholder: '2' },
    { type: 'text', name: 'totalPages', label: 'Total pages', placeholder: '8' },
    { type: 'boolean', name: 'showControls', label: 'Show controls' },
  ],
  render: (props: PaginationPlaygroundProps) => <PaginationPreview {...props} />,
  generateCode: (props) => `import { useState } from 'react';\nimport { Pagination } from '@aciole/acyon';\n\nexport function Example() {\n  const [page, setPage] = useState(${Number(props.currentPage)});\n\n  return (\n    <Pagination\n      currentPage={page}\n      totalPages={${Number(props.totalPages)}}\n      showControls={${Boolean(props.showControls)}}\n      onPageChange={setPage}\n    />\n  );\n}`,

} satisfies ComponentDefinition<PaginationPlaygroundProps>;
