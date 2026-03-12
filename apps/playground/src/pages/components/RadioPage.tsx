import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Radio
} from '@aciole/labs'

export function RadioPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Radio</Heading>
        <Text size="lg" color="subtle">Permite selecionar apenas uma opção de uma lista.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Exemplos" description="Uso do componente Radio" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Radio name="radio-group" label="Opção 1" defaultChecked />
              <Radio name="radio-group" label="Opção 2" />
              <Radio name="radio-group" label="Opção 3" disabled />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
