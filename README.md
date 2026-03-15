# @acyui/components

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install @acyui/components
```

## Uso

```tsx
import { ThemeProvider, Button } from '@acyui/components';
import '@acyui/components/dist/acyui.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello Acyon</Button>
    </ThemeProvider>
  );
}
```
