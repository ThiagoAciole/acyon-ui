import { Badge, Box, Flex, Grid, Heading, Text } from '@aciole/labs';

import { LivePlayground } from '../components/LivePlayground';
import type { ComponentRoute } from '../data/componentRoutes';

interface ComponentShowcasePageProps {
  route: ComponentRoute;
}

export function ComponentShowcasePage({ route }: ComponentShowcasePageProps) {
  return (
    <Box as="section">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Flex align="center" justify="space-between" wrap="wrap" gap="3">
          <Box>
            <Heading size="3xl" weight="bold">
              {route.name}
            </Heading>
            <Text size="lg" color="subtle">
              {route.description}
            </Text>
          </Box>
          <Badge>{route.category}</Badge>
        </Flex>
      </header>

      <Grid columns={1} gap="4">
        <LivePlayground route={route} />
      </Grid>
    </Box>
  );
}
