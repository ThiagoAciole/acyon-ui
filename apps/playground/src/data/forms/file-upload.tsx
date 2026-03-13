import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type FileUploadPlaygroundProps = { title: string; description: string; multiple: boolean; disabled: boolean };

export const fileuploadDefinition = {
  id: 'file-upload',
  name: 'FileUpload',
  category: 'forms',
  icon: 'upload-cloud',
  description: 'Entrada de arquivos com dropzone e validacao.',
  imports: ['FileUpload'],
  initialProps: { title: 'Enviar arquivo', description: 'PDF, PNG ou JPG de ate 5MB.', multiple: false, disabled: false },
  controls: [
    { type: 'text', name: 'title', label: 'Title', placeholder: 'Enviar arquivo' },
    { type: 'textarea', name: 'description', label: 'Description', placeholder: 'PDF, PNG ou JPG de ate 5MB.' },
    { type: 'boolean', name: 'multiple', label: 'Multiple' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: FileUploadPlaygroundProps) => <Labs.FileUpload title={props.title} description={props.description} multiple={Boolean(props.multiple)} disabled={Boolean(props.disabled)} />,
  generateCode: (props) => wrapSnippet(['FileUpload'], [
    'return (',
    `  ${buildOpeningTag('FileUpload', props as Record<string, unknown>)} />`,
    ');',
  ]),

} satisfies ComponentDefinition<FileUploadPlaygroundProps>;
