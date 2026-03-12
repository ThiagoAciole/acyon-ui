import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Badge
} from '@aciole/labs'

export function BadgePage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Badge</Heading>
        <Text size="lg" color="subtle">Pequenos rótulos para status ou notificações.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Variantes" description="Estilos de preenchimento" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Badge variant="solid">Solid</Badge>
              <Badge variant="soft">Soft</Badge>
              <Badge variant="outline">Outline</Badge>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Cores" description="Status semânticos" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Badge color="primary">Primary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="neutral">Default</Badge>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
