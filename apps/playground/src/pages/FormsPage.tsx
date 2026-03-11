import { useState } from 'react';
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Box,
  Grid,
  Flex,
  Input,
  TextArea,
  Switch,
  Search,
  Select,
  MultiSelect,
  Checkbox,
  Radio,
  Slider,
  DatePicker,
  FileUpload,
  LockIcon,
  SearchIcon
} from '@aciole/labs'

export function FormsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [role, setRole] = useState('design');
  const [stacks, setStacks] = useState<string[]>(['react', 'typescript']);
  const [sliderValue, setSliderValue] = useState(48);

  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Formulários</Heading>
        <Text size="lg" color="subtle">Campos, seleção e controles para coleta de dados.</Text>
      </header>

      <Flex direction="column" gap="6">
        <Card>
          <CardHeader title="Inputs" description="Campos de texto com suporte a adornos e mensagens" />
          <CardBody>
            <Grid columns={2} gap="6">
              <Input label="Nome Completo" supportText="Digite seu nome como no documento" placeholder="Ex: Thiago Aciole" full />
              <Input label="E-mail" error="E-mail inválido" type="email" value="invalid-email" full readOnly />
              <Input label="Pesquisar" id="search-input" prefix={<SearchIcon size={16} />} placeholder="Buscar..." full />
              <Input label="Senha" type="password" suffix={<LockIcon size={16} />} placeholder="••••••••" full />
            </Grid>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Busca & Seleção" description="Search, Select e MultiSelect no padrão moderno da lib" />
          <CardBody>
            <Grid columns={2} gap="6">
              <Search
                label="Busca global"
                placeholder="Pesquisar componentes..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                supportText="Dispara onSearch/onChange com o valor atual."
                full
              />
              <Select
                label="Área de atuação"
                value={role}
                onChange={setRole}
                options={[
                  { value: 'design', label: 'Design System' },
                  { value: 'frontend', label: 'Frontend' },
                  { value: 'backend', label: 'Backend' }
                ]}
                searchable
                full
              />
              <MultiSelect
                label="Stack principal"
                value={stacks}
                onChange={setStacks}
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'typescript', label: 'TypeScript' },
                  { value: 'node', label: 'Node.js' },
                  { value: 'vite', label: 'Vite' }
                ]}
                supportText="Selecione múltiplas opções."
                full
              />
              <Box padding="4" rounded="lg" surface="subtle" border>
                <Text size="sm" color="subtle">Valores selecionados</Text>
                <Text weight="medium">Busca: {searchValue || 'vazio'}</Text>
                <Text weight="medium">Área: {role}</Text>
                <Text weight="medium">Stacks: {stacks.join(', ')}</Text>
              </Box>
            </Grid>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Controles de Escolha" description="Checkbox, Radio, Switch e Slider" />
          <CardBody>
            <Grid columns={2} gap="6">
              <Flex direction="column" gap="4">
                <Checkbox label="Aceitar termos de uso" supportText="Necessário para continuar" defaultChecked />
                <Checkbox label="Estado indeterminado" indeterminate />
                <Radio name="plan" label="Plano mensal" defaultChecked />
                <Radio name="plan" label="Plano anual" description="Com desconto aplicado" />
              </Flex>
              <Flex direction="column" gap="5">
                <Switch
                  label="Receber notificações por e-mail"
                  checked={notificationsEnabled}
                  onChange={(event) => setNotificationsEnabled(event.target.checked)}
                />
                <Slider
                  label="Prioridade"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={(event) => setSliderValue(Number(event.target.value))}
                  supportText="Controle contínuo com visual da lib."
                />
              </Flex>
            </Grid>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Data & Arquivos" description="DatePicker, TextArea e FileUpload" />
          <CardBody>
            <Grid columns={2} gap="6">
              <Flex direction="column" gap="5">
                <DatePicker label="Data de entrega" supportText="Selecione a data limite." full />
                <TextArea
                  label="Descrição"
                  supportText="Explique o contexto em poucas linhas."
                  placeholder="Escreva uma descrição detalhada..."
                  full
                />
              </Flex>
              <FileUpload
                title="Upload de arquivos"
                description="Arraste aqui ou clique para selecionar."
                multiple
              />
            </Grid>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
