import { useState } from 'react';
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Breadcrumb,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  List,
  Pagination,
  TopBar,
  Badge,
  Button,
  Divider,
  Accordion,
  PageHeader,
  Spacer
} from '@aciole/labs'

export function LayoutPage() {
  const [page, setPage] = useState(2);

  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Layout & Estrutura</Heading>
        <Text size="lg" color="subtle">Composição, navegação estrutural e organização de dados.</Text>
      </header>

      <Flex direction="column" gap="6">
        <Card>
          <CardHeader title="PageHeader & TopBar" description="Cabeçalhos estruturais com navegação e ações" />
          <CardBody>
            <Flex direction="column" gap="5">
              <PageHeader
                title="Components"
                description="Visão geral dos componentes estruturais."
                showBack
                action={<Button size="sm">Nova ação</Button>}
              />
              <TopBar
                logo={<Text weight="bold">Labs</Text>}
                navItems={[
                  { label: 'Overview', href: '#' },
                  { label: 'Components', href: '#', active: true },
                  { label: 'Tokens', href: '#' }
                ]}
                extraContent={<Button size="sm">Ação</Button>}
                themeToggle
              />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Breadcrumb, Tabs & Divider" description="Navegação contextual e separadores" />
          <CardBody>
            <Flex direction="column" gap="5">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Components', href: '#' },
                  { label: 'Layout' }
                ]}
              />
              <Divider label="Navegação" />
              <Tabs
                tabs={[
                  { value: 'overview', label: 'Overview', content: <Text>Visão geral das primitives de layout disponíveis na biblioteca.</Text> },
                  { value: 'usage', label: 'Usage', content: <Text>Combine `Box`, `Flex`, `Grid` e `Container` para estruturar as páginas.</Text> },
                  { value: 'tokens', label: 'Tokens', content: <Text>O espaçamento e a superfície seguem os tokens centrais definidos em tema.</Text> }
                ]}
              />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Grid, Spacer & Accordion" description="Composição flexível e agrupamento de conteúdo" />
          <CardBody>
            <Grid columns={2} gap="6">
              <Grid columns={3} gap="4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <Box
                    key={i}
                    padding="4"
                    rounded="md"
                    surface="subtle"
                    border
                    style={{ textAlign: 'center', fontWeight: 600 }}
                  >
                    Grid Item {i}
                  </Box>
                ))}
              </Grid>
              <Flex direction="column">
                <Text weight="medium">Primeiro bloco</Text>
                <Spacer size="var(--space-4)" />
                <Text weight="medium">Segundo bloco com Spacer</Text>
                <Spacer size="var(--space-5)" />
                <Accordion defaultValue="item-1">
                  <Accordion.Item id="item-1" title="Estrutura base">
                    A accordion agora segue o mesmo padrão de tema e composição da lib.
                  </Accordion.Item>
                  <Accordion.Item id="item-2" title="Integração">
                    Pode ser usada em páginas, painéis e seções colapsáveis do playground.
                  </Accordion.Item>
                </Accordion>
              </Flex>
            </Grid>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="List & Pagination" description="Estruturas de navegação e listas de dados" />
          <CardBody>
            <Flex direction="column" gap="5">
              <List variant="bordered">
                <List.Item description="Componente estrutural" endContent={<Badge color="success">Novo</Badge>}>
                  TopBar
                </List.Item>
                <List.Item description="Paginação de conteúdo" endContent={<Badge color="primary" variant="outline">UI</Badge>}>
                  Pagination
                </List.Item>
                <List.Item description="Navegação em sequência" endContent={<Badge color="neutral">Base</Badge>}>
                  Breadcrumb
                </List.Item>
              </List>
              <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Table" description="Exibição tabular com estilos da biblioteca" />
          <CardBody>
            <Table striped hover>
              <Thead>
                <Tr>
                  <Th>Componente</Th>
                  <Th>Status</Th>
                  <Th>Categoria</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Tabs</Td>
                  <Td>Pronto</Td>
                  <Td>Navegação</Td>
                </Tr>
                <Tr>
                  <Td>Accordion</Td>
                  <Td>Pronto</Td>
                  <Td>Estrutura</Td>
                </Tr>
                <Tr>
                  <Td>List</Td>
                  <Td>Pronto</Td>
                  <Td>Dados</Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
