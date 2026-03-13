import { buildOpeningTag, SliderPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type SliderPlaygroundProps = { label: string; supportText: string; min: string; max: string; value: string };

export const sliderDefinition = {
  id: 'slider',
  name: 'Slider',
  category: 'forms',
  icon: 'sliders-horizontal',
  description: 'Controle de faixa numerica.',
  imports: ['Slider'],
  initialProps: { label: 'Volume', supportText: 'Ajuste o valor', min: '0', max: '100', value: '40' },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Volume' },
    { type: 'text', name: 'supportText', label: 'Support text', placeholder: 'Ajuste o valor' },
    { type: 'text', name: 'min', label: 'Min', placeholder: '0' },
    { type: 'text', name: 'max', label: 'Max', placeholder: '100' },
    { type: 'text', name: 'value', label: 'Value', placeholder: '40' },
  ],
  render: (props: SliderPlaygroundProps) => <SliderPreview {...props} />,
  generateCode: (props) => wrapSnippet(['Slider'], [
    'return (',
    `  ${buildOpeningTag('Slider', { label: props.label, supportText: props.supportText, min: Number(props.min), max: Number(props.max), value: Number(props.value) })} />`,
    ');',
  ]),

} satisfies ComponentDefinition<SliderPlaygroundProps>;
