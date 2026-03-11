import { useState } from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Button,
  Modal,
  Drawer,
  useToast,
  ExternalLinkIcon
} from '@aciole/labs'

export function OverlaysPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Heading size="3xl" weight="bold">Overlays</Heading>
        <Text size="lg" color="subtle">Componentes de sobreposição, painéis e notificações temporárias.</Text>
      </header>

      <Flex direction="column" gap="6">
        <Card variant="elevated">
          <CardHeader title="Modal, Drawer & Toast" icon={<ExternalLinkIcon />} />
          <CardBody>
            <Flex gap="4" wrap="wrap">
              <Button variant="soft" onClick={() => setIsModalOpen(true)}>
                Abrir Modal
              </Button>
              <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                Abrir Drawer
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  toast({
                    title: 'Build concluído',
                    description: 'Os artefatos do pacote foram gerados com sucesso.',
                    color: 'success'
                  })
                }
              >
                Exibir Toast
              </Button>
            </Flex>

            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Exemplo de Modal"
              description="Componente de modal acessível com título, descrição e footer configurável."
              footer={
                <Flex gap="3" justify="flex-end">
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                  <Button onClick={() => setIsModalOpen(false)}>Entendido</Button>
                </Flex>
              }
            >
              <Text>
                O modal utiliza portal para ser renderizado no topo da árvore e respeita o tema ativo da lib.
              </Text>
              <Box padding="4" rounded="md" surface="subtle" style={{ marginTop: 'var(--space-4)' }}>
                <Text size="sm">Você pode fechar usando ESC ou clicando no overlay.</Text>
              </Box>
            </Modal>

            <Drawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              title="Detalhes do deploy"
              footer={
                <Flex gap="3">
                  <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>Fechar</Button>
                  <Button onClick={() => setIsDrawerOpen(false)}>Confirmar</Button>
                </Flex>
              }
            >
              <Flex direction="column" gap="4">
                <Text>O drawer é útil para fluxos laterais que não precisam interromper completamente o contexto atual.</Text>
                <Box padding="4" rounded="md" surface="subtle" border>
                  <Text size="sm" color="subtle">Última publicação</Text>
                  <Heading size="sm">v0.0.1</Heading>
                </Box>
              </Flex>
            </Drawer>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
