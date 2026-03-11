import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Button,
  IconButton,
  Tooltip,
  PlusIcon,
  SearchIcon,
  TrashIcon,
  SettingsIcon
} from '@aciole/labs'

export function ButtonsPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Botões & Ações</Heading>
        <Text size="lg" color="subtle">Componentes interativos para disparar ações no sistema.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Variantes de Botões" description="Demonstração dos estilos base" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Button variant="solid">Solid (Primary)</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Cores e Estados" description="Feedbacks visuais e estados de interação" />
          <CardBody>
            <Flex direction="column" gap="6">
              <Flex gap="4" wrap="wrap">
                <Button color="primary">Primary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="default">Default</Button>
              </Flex>
              <Flex gap="4" wrap="wrap" align="center">
                <Button loading>Loading State</Button>
                <Button icon={<PlusIcon size={16} />}>With Icon</Button>
                <Button icon={<SearchIcon size={16} />} iconRight>Icon Right</Button>
                <Button disabled>Disabled Button</Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="IconButton & Tooltip" description="Botões compactos com contexto adicional" />
          <CardBody>
            <Flex gap="4" wrap="wrap" align="center">
              <Tooltip content="Pesquisar no projeto">
                <span><IconButton icon={<SearchIcon size={16} />} variant="solid" label="Search" /></span>
              </Tooltip>
              <Tooltip content="Adicionar novo item" placement="bottom">
                <span><IconButton icon={<PlusIcon size={16} />} variant="soft" color="success" label="Add" /></span>
              </Tooltip>
              <Tooltip content="Excluir item atual" placement="bottom">
                <span><IconButton icon={<TrashIcon size={16} />} variant="outline" color="danger" label="Delete" /></span>
              </Tooltip>
              <Tooltip content="Abrir configurações" placement="left">
                <span><IconButton icon={<SettingsIcon size={16} />} variant="ghost" label="Settings" /></span>
              </Tooltip>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
