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
  PlusIcon,
  SearchIcon
} from '@aciole/labs'

export function ButtonPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Button</Heading>
        <Text size="lg" color="subtle">Componente de botão versátil para ações e comandos.</Text>
      </header>

      <Grid columns={1} gap="4">
        <Card>
          <CardHeader title="Variantes" description="Diferentes estilos visuais" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Button variant="solid">Solid</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Cores" description="Esquemas de cores temáticos" />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Button color="primary">Primary</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="default">Default</Button>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Estados" description="Feedback visual para diferentes situações" />
          <CardBody>
            <Flex gap="4" wrap="wrap" align="center">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button icon={<PlusIcon size={16} />}>With Icon</Button>
              <Button icon={<SearchIcon size={16} />} iconRight>Icon Right</Button>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Tamanhos" description="Opções de dimensionamento" />
          <CardBody>
            <Flex gap="4" wrap="wrap" align="center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
