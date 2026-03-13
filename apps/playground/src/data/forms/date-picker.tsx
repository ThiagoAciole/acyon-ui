import { buildOpeningTag, DatePickerPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type DatePickerPlaygroundProps = { label: string; placeholder: string; hint: string; disabled: boolean; value: string };

export const datepickerDefinition = {
  id: 'date-picker',
  name: 'DatePicker',
  category: 'forms',
  icon: 'calendar',
  description: 'Entrada de data com experiencia guiada.',
  imports: ['DatePicker'],
  initialProps: { label: 'Data', placeholder: 'dd/mm/aaaa', hint: 'Selecione uma data', disabled: false, value: '2026-03-12' },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Data' },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'dd/mm/aaaa' },
    { type: 'text', name: 'hint', label: 'Hint', placeholder: 'Selecione uma data' },
    { type: 'text', name: 'value', label: 'Value (ISO)', placeholder: '2026-03-12' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: DatePickerPlaygroundProps) => <DatePickerPreview {...props} />,
  generateCode: (props) => wrapSnippet(['DatePicker'], [
    'return (',
    `  ${buildOpeningTag('DatePicker', { label: props.label, placeholder: props.placeholder, hint: props.hint, value: props.value, disabled: props.disabled })} />`,
    ');',
  ]),

} satisfies ComponentDefinition<DatePickerPlaygroundProps>;
