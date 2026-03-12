import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Input,
  SearchIcon,
  LockIcon
} from '@aciole/labs'

export function InputPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Input</Heading>
        <Text size="lg" color="subtle">Campos de entrada de texto padronizados.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Básico" description="Estados comuns de entrada" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Input placeholder="Placeholder padrão" />
              <Input defaultValue="Valor inicial" />
              <Input placeholder="Campo desabilitado" disabled />
              <Input placeholder="Campo com erro" error="Este campo é obrigatório" />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Com Ícones" description="Apoio visual nos campos" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Input prefix={<SearchIcon size={16} />} placeholder="Pesquisar..." />
              <Input prefix={<SearchIcon size={16} />} placeholder="E-mail" />
              <Input prefix={<LockIcon size={16} />} type="password" placeholder="Senha" />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
