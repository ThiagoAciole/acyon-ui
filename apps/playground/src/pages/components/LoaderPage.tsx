import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Loader
} from '@aciole/labs'

export function LoaderPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Loader</Heading>
        <Text size="lg" color="subtle">Indicadores visuais de carregamento.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Tamanhos" description="Opções de escala do loader" />
          <CardBody>
            <Flex gap="8" align="center">
              <Loader size="xs" />
              <Loader size="sm" />
              <Loader size="md" />
              <Loader size="lg" />
              <Loader size="lg" />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Cores" description="Adaptando ao tema ou contexto" />
          <CardBody>
            <Flex gap="8" align="center">
              <Loader color="primary" />
              <Loader color="success" />
              <Loader color="warning" />
              <Loader color="danger" />
              <Loader color="primary" />
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
