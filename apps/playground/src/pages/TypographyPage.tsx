import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Code,
  Link
} from '@aciole/labs'

export function TypographyPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Tipografia</Heading>
        <Text size="lg" color="subtle">Componentes para hierarquia visual, links e trechos de código.</Text>
      </header>

      <Flex direction="column" gap="6">
        <Card variant="outlined">
          <CardHeader title="Headings & Text" description="Escalas tipográficas base da biblioteca" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Heading size="3xl">Heading 3XL</Heading>
              <Heading size="2xl">Heading 2XL</Heading>
              <Heading size="xl">Heading XL</Heading>
              <Heading size="lg">Heading LG</Heading>
              <Heading size="md">Heading MD</Heading>
              <Heading size="sm">Heading SM</Heading>
              <Heading size="xs">Heading XS</Heading>
              <hr style={{ border: '0', borderTop: '1px solid var(--border-main)', width: '100%' }} />
              <Text size="xl">Texto Extra Large</Text>
              <Text size="lg">Texto Large</Text>
              <Text size="md">Texto Medium</Text>
              <Text size="sm">Texto Small</Text>
              <Text size="xs">Texto Extra Small</Text>
              <Text weight="bold">Texto em negrito</Text>
              <Text color="subtle">Texto sutil</Text>
              <Text color="danger">Texto com cor de erro</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Links & Code" description="Elementos inline e blocos utilitários de conteúdo" />
          <CardBody>
            <Flex direction="column" gap="4">
              <Text>
                Consulte a documentação em <Link href="https://github.com" target="_blank" rel="noreferrer">GitHub</Link> ou navegue por um <Link href="/docs" underline>link sublinhado</Link>.
              </Text>
              <Text>
                Exemplo inline: <Code>npm run build</Code>
              </Text>
              <Code block>
                {`import { Button, Text } from '@aciole/labs'

export function Example() {
  return <Button>Executar</Button>
}`}
              </Code>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
