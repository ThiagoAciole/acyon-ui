import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Grid,
  Button
} from '@aciole/labs'

export function CardPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Card</Heading>
        <Text size="lg" color="subtle">Container para agrupar conteúdos relacionados.</Text>
      </header>

      <Grid columns={2} gap="6">
        <Card>
          <CardHeader title="Título do Card" description="Descrição opcional do card" />
          <CardBody>
            <Text>Conteúdo principal do card fica aqui dentro do CardBody.</Text>
          </CardBody>
          <CardFooter>
            <Flex justify="flex-end" gap="2">
              <Button variant="ghost">Cancelar</Button>
              <Button>Confirmar</Button>
            </Flex>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <Heading size="md" style={{ marginBottom: 'var(--space-2)' }}>Card Sem Header</Heading>
            <Text>Você pode usar apenas o CardBody para layouts mais simples e diretos.</Text>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
