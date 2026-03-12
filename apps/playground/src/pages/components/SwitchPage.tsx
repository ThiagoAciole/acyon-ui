import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Switch
} from '@aciole/labs'

export function SwitchPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Switch</Heading>
        <Text size="lg" color="subtle">Alternância entre dois estados (ligado/desligado).</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Exemplos" description="Estados do componente Switch" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Switch label="Ativar notificações" />
              <Switch label="Modo escuro" defaultChecked />
              <Switch label="Desabilitado" disabled />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
