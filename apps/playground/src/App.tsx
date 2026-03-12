import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  Flex,
  Heading,
  HomeIcon,
  LayoutIcon,
  MenuIcon,
  MoonIcon,
  Sidebar,
  SunIcon,
  Text,
  useTheme,
} from '@aciole/labs';

import { ComponentShowcasePage } from './pages/ComponentShowcasePage';
import { Dashboard } from './pages/Dashboard';
import { componentRoutes, componentCategories } from './pages/componentRoutes';

const DASHBOARD_ROUTE = 'dashboard';

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, '').trim();
  return route || DASHBOARD_ROUTE;
}

export function App() {
  const [currentPage, setCurrentPage] = useState<string>(getRouteFromHash);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const syncRoute = () => setCurrentPage(getRouteFromHash());

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const navigateTo = (routeId: string) => {
    window.location.hash = routeId === DASHBOARD_ROUTE ? '/' : `/${routeId}`;
  };

  const currentRoute =
    currentPage === DASHBOARD_ROUTE
      ? null
      : componentRoutes.find((route) => route.id === currentPage) ?? null;

  return (
    <Flex style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={setSidebarCollapsed}>
        <Sidebar.Header icon={<MenuIcon size={18} />}>
          <Heading size="xs">Labs Design</Heading>
        </Sidebar.Header>

        <Box style={{ padding: 'var(--space-2)', overflowY: 'auto', flex: 1 }}>
          <Sidebar.Item
            icon={<HomeIcon size={18} />}
            active={currentPage === DASHBOARD_ROUTE}
            onClick={() => navigateTo(DASHBOARD_ROUTE)}
          >
            Inicio
          </Sidebar.Item>

          {componentCategories.map((category) => {
            const routes = componentRoutes.filter((route) => route.category === category);
            if (routes.length === 0) return null;

            return (
              <div key={category} style={{ marginTop: 'var(--space-4)' }}>
                <Text
                  size="xs"
                  weight="bold"
                  color="subtle"
                  style={{ padding: '0 var(--space-3) var(--space-2)', textTransform: 'uppercase' }}
                >
                  {!sidebarCollapsed && category}
                </Text>

                {routes.map((route) => (
                  <Sidebar.Item
                    key={route.id}
                    icon={<LayoutIcon size={16} />}
                    active={currentPage === route.id}
                    onClick={() => navigateTo(route.id)}
                    style={{ paddingLeft: sidebarCollapsed ? 'var(--space-3)' : 'var(--space-4)' }}
                  >
                    {route.name}
                  </Sidebar.Item>
                ))}
              </div>
            );
          })}
        </Box>

        <Sidebar.Footer>
          <Sidebar.Item
            icon={theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'Escuro' : 'Claro'}
          </Sidebar.Item>
        </Sidebar.Footer>
      </Sidebar>

      <Box style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-8)' }}>
        <Container size="xl">
          {currentRoute ? <ComponentShowcasePage route={currentRoute} /> : <Dashboard />}
        </Container>
      </Box>
    </Flex>
  );
}
