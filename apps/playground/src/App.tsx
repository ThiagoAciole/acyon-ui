import { useState } from "react";

import {
  Container,
  Flex,
  Heading,
  Sidebar,
  useTheme,
  MenuIcon,
  FileIcon,
  ActivityIcon,
  HomeIcon,
  EditIcon,
  ExternalLinkIcon,
  LayoutIcon,
  MoonIcon,
  SunIcon
} from '@aciole/labs'
import { Dashboard } from "./pages/Dashboard";
import { TypographyPage } from "./pages/TypographyPage";
import { ButtonsPage } from "./pages/ButtonsPage";
import { FormsPage } from "./pages/FormsPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { OverlaysPage } from "./pages/OverlaysPage";
import { LayoutPage } from "./pages/LayoutPage";

type Page = 'dashboard' | 'typography' | 'buttons' | 'forms' | 'feedback' | 'overlays' | 'layout';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'typography': return <TypographyPage />;
      case 'buttons': return <ButtonsPage />;
      case 'forms': return <FormsPage />;
      case 'feedback': return <FeedbackPage />;
      case 'overlays': return <OverlaysPage />;
      case 'layout': return <LayoutPage />;
      default: return <Dashboard />;
    }
  };

  return (

    <Flex style={{ height: '100vh' }}>
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={setSidebarCollapsed}
      >
        <Sidebar.Header icon={<MenuIcon size={18} />}>
          <Heading size="xs">Labs Docs</Heading>
        </Sidebar.Header>

        <div style={{ padding: 'var(--space-2)' }}>
          <Sidebar.Item
            icon={<HomeIcon size={18} />}
            active={currentPage === 'dashboard'}
            onClick={() => setCurrentPage('dashboard')}
          >
            Início
          </Sidebar.Item>

          <Sidebar.Item
            icon={<FileIcon size={18} />}
            active={currentPage === 'typography'}
            onClick={() => setCurrentPage('typography')}
          >
            Tipografia
          </Sidebar.Item>

          <Sidebar.Item
            icon={<ActivityIcon size={18} />}
            active={currentPage === 'buttons'}
            onClick={() => setCurrentPage('buttons')}
          >
            Botões
          </Sidebar.Item>

          <Sidebar.Item
            icon={<EditIcon size={18} />}
            active={currentPage === 'forms'}
            onClick={() => setCurrentPage('forms')}
          >
            Formulários
          </Sidebar.Item>

          <Sidebar.Item
            icon={<ActivityIcon size={18} />}
            active={currentPage === 'feedback'}
            onClick={() => setCurrentPage('feedback')}
          >
            Feedback
          </Sidebar.Item>

          <Sidebar.Item
            icon={<ExternalLinkIcon size={18} />}
            active={currentPage === 'overlays'}
            onClick={() => setCurrentPage('overlays')}
          >
            Overlays
          </Sidebar.Item>

          <Sidebar.Item
            icon={<LayoutIcon size={18} />}
            active={currentPage === 'layout'}
            onClick={() => setCurrentPage('layout')}
          >
            Layout
          </Sidebar.Item>
        </div>

        <Sidebar.Footer>
          <Sidebar.Item
            icon={theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </Sidebar.Item>
        </Sidebar.Footer>
      </Sidebar>

      <Container size="full">
        {renderPage()}
      </Container>
    </Flex>

  )
}
