import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import * as Labs from '@aciole/labs';
import ts from 'typescript';
import { Box, Button, Card, CardBody, CardHeader, Code, Flex, IconButton, Text } from '@aciole/labs';
import { Copy } from 'lucide-react';
import type { ComponentRoute } from './componentRoutes';

interface LivePlaygroundProps {
  route: ComponentRoute;
}

function renderSnippet(code: string) {
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      jsx: ts.JsxEmit.React,
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
    },
  }).outputText;

  const executor = new Function(
    'React',
    'Labs',
    `
      return (() => {
        ${transpiled}
      })();
    `,
  ) as (react: typeof React, labs: typeof Labs) => React.ReactNode;

  return executor(React, Labs);
}

export function LivePlayground({ route }: LivePlaygroundProps) {
  const [code, setCode] = useState(route.initialCode);

  useEffect(() => {
    setCode(route.initialCode);
  }, [route.id, route.initialCode]);

  const result = useMemo(() => {
    try {
      return {
        element: renderSnippet(code),
        error: null,
      };
    } catch (error) {
      return {
        element: null,
        error: error instanceof Error ? error.message : 'Erro desconhecido ao renderizar o componente.',
      };
    }
  }, [code]);

  const lineCount = Math.max(code.split('\n').length, 8);
  const lineNumbers = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');

  return (
    <>
      <Card>
        <CardHeader
          title="Playground"
          description="Edite o snippet abaixo e veja o componente mudar em tempo real."
        />
        <CardBody>
          <Box className="live-preview-shell">
            <div className="live-preview-shell__label">Live Preview</div>
            <div className="live-preview-shell__controls" aria-hidden="true">
              <button type="button" className="live-preview-shell__control">
                <span className="live-preview-shell__grid-icon live-preview-shell__grid-icon--small" />
              </button>
              <button type="button" className="live-preview-shell__control live-preview-shell__control--active">
                <span className="live-preview-shell__grid-icon" />
              </button>
            </div>

            <div className="live-preview-shell__stage">
              {result.error ? (
                <Box className="live-preview-error">
                  <Text weight="bold">Erro ao renderizar</Text>
                  <Code>{result.error}</Code>
                </Box>
              ) : (
                result.element
              )}
            </div>
            <Flex direction="column" gap="4">
              <div className="live-terminal">
                <IconButton
                  className="live-terminal__copy"
                  onClick={() => navigator.clipboard?.writeText(code)}
                  icon={<Copy />}
                  variant='soft'
                >

                </IconButton>

                <div className="live-terminal__body">
                  <pre className="live-terminal__gutter" aria-hidden="true">
                    {lineNumbers}
                  </pre>
                  <textarea
                    className="live-terminal__editor"
                    spellCheck={false}
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    aria-label={`Editor do playground de ${route.name}`}
                  />
                </div>
              </div>

              <Flex align="center" justify="space-between" wrap="wrap" gap="3">
                <Text as="p" size="sm" color="subtle" style={{ margin: 0 }}>
                  Exemplo: <Code>{`const { ${route.name} } = Labs;`}</Code>
                </Text>
                <Button variant="ghost" size="sm" onClick={() => setCode(route.initialCode)}>
                  Resetar snippet
                </Button>
              </Flex>
            </Flex>
          </Box>

        </CardBody>
      </Card>
    </>
  );
}
