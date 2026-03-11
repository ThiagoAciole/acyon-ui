import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Grid,
  Loader,
  Skeleton,
  Progress,
  Badge,
  Avatar,
  EmptyState,
  Timeline,
  TimelineItem,
  Tag,
  Image,
  ActivityIcon,
  InfoIcon
} from '@aciole/labs'

export function FeedbackPage() {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Feedback & Status</Heading>
        <Text size="lg" color="subtle">Indicadores visuais, progresso, placeholders e identidade.</Text>
      </header>

      <Grid columns={2} gap="6">
        <Card variant="elevated">
          <CardHeader title="Loaders & Skeletons" icon={<ActivityIcon />} />
          <CardBody>
            <Flex direction="column" gap="5">
              <Flex gap="4" align="center">
                <Loader size="xs" />
                <Loader size="sm" />
                <Loader size="md" />
                <Loader size="lg" />
              </Flex>
              <Grid columns={2} gap="4">
                <Skeleton style={{ height: 14, width: '100%' }} />
                <Skeleton style={{ height: 14, width: '70%' }} />
                <Skeleton style={{ height: 64, width: '100%' }} />
                <Skeleton style={{ height: 64, width: '100%' }} />
              </Grid>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Progress, Badge & Tag" description="Mensagens curtas e indicadores de avanço" />
          <CardBody>
            <Flex direction="column" gap="5">
              <Progress label="Publicação do pacote" value={72} showValue color="primary" />
              <Progress label="Cobertura de testes" value={91} showValue color="success" size="lg" />
              <Flex gap="3" wrap="wrap">
                <Badge>Primary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning" variant="outline">Warning</Badge>
                <Badge color="danger" variant="solid">Danger</Badge>
                <Tag>React</Tag>
                <Tag color="success" variant="outline">Stable</Tag>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Avatar & Image" description="Representação visual de usuários e mídia" />
          <CardBody>
            <Flex gap="4" align="center" wrap="wrap">
              <Avatar name="Thiago Aciole" status="online" />
              <Avatar name="Maria Silva" size="lg" status="away" />
              <Image
                src="https://i.pravatar.cc/120?img=12"
                alt="Profile preview"
                style={{ width: 72, height: 72 }}
                radius="full"
              />
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="EmptyState & Timeline" description="Estados vazios e progressão temporal" />
          <CardBody>
            <Flex direction="column" gap="6">
              <EmptyState
                icon={<InfoIcon size={24} />}
                title="Nenhum resultado encontrado"
                description="Tente ajustar os filtros para visualizar itens."
              />
              <Timeline>
                <TimelineItem title="Briefing criado" date="09:00" description="Escopo inicial alinhado com o time." />
                <TimelineItem title="UI aprovada" date="11:30" description="Validação visual concluída." />
                <TimelineItem title="Entrega publicada" date="16:20" description="Componente disponível no pacote." />
              </Timeline>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
