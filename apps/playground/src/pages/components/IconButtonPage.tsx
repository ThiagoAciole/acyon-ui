import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  IconButton,
  Tooltip,
  PlusIcon,
  SearchIcon,
  TrashIcon,
  SettingsIcon
} from '@aciole/labs'

export function IconButtonPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">IconButton</Heading>
        <Text size="lg" color="subtle">Botões compactos baseados em ícones.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Variantes e Cores" description="Combinações de estilos ícones" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <IconButton icon={<PlusIcon size={18} />} variant="solid" label="Add" />
              <IconButton icon={<SearchIcon size={18} />} variant="soft" color="primary" label="Search" />
              <IconButton icon={<SettingsIcon size={18} />} variant="outline" label="Settings" />
              <IconButton icon={<TrashIcon size={18} />} variant="ghost" color="danger" label="Delete" />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Com Tooltip" description="Sempre use tooltips com icon buttons para acessibilidade" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Tooltip content="Adicionar novo item">
                <span><IconButton icon={<PlusIcon size={18} />} label="Add" /></span>
              </Tooltip>
              <Tooltip content="Configurações">
                <span><IconButton icon={<SettingsIcon size={18} />} variant="soft" label="Settings" /></span>
              </Tooltip>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Tamanhos" description="Dimensões compatíveis com botões de texto" />
          <CardBody>
            <Flex gap="4" wrap="wrap" align="center">
              <IconButton icon={<PlusIcon size={14} />} size="sm" label="Add" />
              <IconButton icon={<PlusIcon size={18} />} size="md" label="Add" />
              <IconButton icon={<PlusIcon size={22} />} size="lg" label="Add" />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
