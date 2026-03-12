import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Checkbox
} from '@aciole/labs'

export function CheckboxPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Checkbox</Heading>
        <Text size="lg" color="subtle">Permite selecionar um ou mais itens de uma lista.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Exemplos" description="Diferentes estados do checkbox" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Checkbox label="Opção Padrão" />
              <Checkbox label="Opção Marcada" defaultChecked />
              <Checkbox label="Opção Indeterminada" indeterminate />
              <Checkbox label="Opção Desabilitada" disabled />
              <Checkbox label="Opção com Erro" supportText="Seleção obrigatória" />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
