import { ModalPreview } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type ModalPlaygroundProps = { title: string; description: string; body: string; confirmLabel: string; size: 'small' | 'medium' | 'large' | 'extraLarge'; closeOnOverlayClick: boolean };

export const modalDefinition = {
  id: 'modal',
  name: 'Modal',
  category: 'overlay',
  icon: 'app-window',
  description: 'Dialogo modal para acoes focadas.',
  imports: ['Button', 'Modal', 'Text', 'Flex'],
  initialProps: { title: 'Confirmar acao', description: 'Revise os detalhes antes de continuar.', body: 'Este modal usa o componente real da biblioteca.', confirmLabel: 'Confirmar', size: 'medium', closeOnOverlayClick: true },
  controls: [
    { type: 'text', name: 'title', label: 'Title', placeholder: 'Confirmar acao' },
    { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Revise os detalhes antes de continuar.' },
    { type: 'textarea', name: 'body', label: 'Body', placeholder: 'Conteudo do modal' },
    { type: 'text', name: 'confirmLabel', label: 'Confirm label', placeholder: 'Confirmar' },
    { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }] },
    { type: 'boolean', name: 'closeOnOverlayClick', label: 'Close on overlay click' },
  ],
  render: (props: ModalPlaygroundProps) => <ModalPreview {...props} />,
  generateCode: (props) => `import { useState } from 'react';\nimport { Button, Flex, Modal, Text } from '@aciole/acyon';\n\nexport function Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Abrir modal</Button>\n      <Modal\n        open={open}\n        onClose={() => setOpen(false)}\n        title="${props.title}"\n        description="${props.description}"\n        size="${props.size}"\n        closeOnOverlayClick={${Boolean(props.closeOnOverlayClick)}}\n        footer={(\n          <Flex justify="flex-end" gap="2">\n            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>\n            <Button onClick={() => setOpen(false)}>${props.confirmLabel}</Button>\n          </Flex>\n        )}\n      >\n        <Text>${props.body}</Text>\n      </Modal>\n    </>\n  );\n}`,

} satisfies ComponentDefinition<ModalPlaygroundProps>;
