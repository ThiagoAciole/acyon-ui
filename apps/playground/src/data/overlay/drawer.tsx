import { DrawerPreview } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type DrawerPlaygroundProps = { title: string; body: string; confirmLabel: string; size: 'small' | 'medium' | 'large' | 'full'; placement: 'left' | 'right'; closeOnOverlayClick: boolean };

export const drawerDefinition = {
  id: 'drawer',
  name: 'Drawer',
  category: 'overlay',
  icon: 'panel-left',
  description: 'Painel deslizante para fluxos secundarios.',
  imports: ['Button', 'Drawer', 'Text', 'Flex'],
  initialProps: { title: 'Filtros', body: 'Use este painel para organizar um fluxo secundario sem sair da pagina.', confirmLabel: 'Aplicar', size: 'medium', placement: 'right', closeOnOverlayClick: true },
  controls: [
    { type: 'text', name: 'title', label: 'Title', placeholder: 'Filtros' },
    { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do drawer' },
    { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Aplicar' },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'Full', value: 'full' }] },
    { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
    { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
  ],
  render: (props: DrawerPlaygroundProps) => <DrawerPreview {...props} />,
  generateCode: (props) => `import { useState } from 'react';\nimport { Button, Drawer, Flex, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir drawer</Button>\n      <Drawer\n        isOpen={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        placement="${props.placement}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Drawer>\n    </>\n  );\n}`,

} satisfies ComponentDefinition<DrawerPlaygroundProps>;
