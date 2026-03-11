import {
  Heading,
  Text,
  Card,
  CardBody,
  Flex,
  Box,
  Grid,
  ZapIcon,
  ShieldIcon,
  LayoutIcon,
  BookIcon,
  ArrowRightIcon,
  GithubIcon,
  ExternalLinkIcon
} from '@aciole/labs'

export function Dashboard() {
  return (
    <Box>
      <header style={{ marginBottom: 'var(--space-12)' }}>
        <Heading size="3xl" weight="bold">Showcase de Componentes</Heading>
        <Text size="md" color="subtle" style={{ maxWidth: '800px', marginTop: 'var(--space-4)' }}>
          Bem-vindo ao laboratório do @aciole/labs. Explore nossa biblioteca de componentes modulares,
          acessíveis e altamente customizáveis.
        </Text>
      </header>

      <Grid columns={3} gap="6">
        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <ZapIcon />
              <Heading size="lg">Performance</Heading>
              <Text color="subtle">Componentes otimizados para zero runtime overhead e carregamento instantâneo.</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <ShieldIcon />
              <Heading size="lg">Acessibilidade</Heading>
              <Text color="subtle">Seguindo padrões WAI-ARIA para garantir que todos possam usar sua aplicação.</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card variant="outlined">
          <CardBody>
            <Flex direction="column" gap="4">
              <LayoutIcon />
              <Heading size="lg">Design System</Heading>
              <Text color="subtle">Consistência visual garantida através de tokens semânticos e escala tipográfica.</Text>
            </Flex>
          </CardBody>
        </Card>
      </Grid>

      <Box style={{ marginTop: 'var(--space-12)' }}>
        <Heading size="xl" style={{ marginBottom: 'var(--space-6)' }}>Atalhos Rápidos</Heading>
        <Grid columns={2} gap="4">
          <Card as="a" href="#" style={{ textDecoration: 'none' }}>
            <CardBody>
              <Flex align="center" gap="4">
                <Box style={{ padding: 'var(--space-3)', background: 'var(--color-bg-subtle)', borderRadius: 'var(--labs-radius-md)' }}>
                  <BookIcon />
                </Box>
                <Flex direction='column'>
                  <Heading size="sm">Documentação</Heading>
                  <Text size="xs" color="subtle">Leia as guias completas de uso.</Text>
                </Flex>
                <ArrowRightIcon color="var(--text-subtle)" />
              </Flex>
            </CardBody>
          </Card>

          <Card as="a" href="https://github.com/thiagoaciole/labs" target="_blank" style={{ textDecoration: 'none' }}>
            <CardBody>
              <Flex align="center" gap="4">
                <Box style={{ padding: 'var(--labs-space-3)', background: 'var(--labs-color-bg-subtle)', borderRadius: 'var(--labs-radius-md)' }}>
                  <GithubIcon />
                </Box>
                <Flex direction="column">
                  <Heading size="sm">GitHub</Heading>
                  <Text size="xs" color="subtle">Contribua para o projeto.</Text>
                </Flex>
                <ExternalLinkIcon color="var(--text-subtle)" />
              </Flex>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
