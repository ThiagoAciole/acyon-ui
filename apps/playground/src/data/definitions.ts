/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ComponentDefinitionMap, ComponentMeta, PlaygroundConfigMap } from './types';

export function defineComponents<TDefinitions extends ComponentDefinitionMap>(definitions: TDefinitions): TDefinitions {
  return definitions;
}

export function extractComponentMeta(definitions: ComponentDefinitionMap): ComponentMeta[] {
  return Object.values(definitions).map((definition) => {
    if (!definition) {
      throw new Error('Component definition is required to extract metadata.');
    }

    const { id, name, category, icon, description } = definition;
    return { id, name, category, icon, description };
  });
}

export function extractPlaygroundConfigs(definitions: ComponentDefinitionMap): PlaygroundConfigMap {
  return Object.entries(definitions).reduce<PlaygroundConfigMap>((accumulator, [componentId, definition]) => {
    if (!definition) {
      return accumulator;
    }

    const { id: _id, name: _name, category: _category, icon: _icon, description: _description, ...playgroundConfig } = definition;
    accumulator[componentId] = playgroundConfig;
    return accumulator;
  }, {});
}

export function combineComponentDefinitions(meta: ComponentMeta[], playgrounds: PlaygroundConfigMap): ComponentDefinitionMap {
  return meta.reduce<ComponentDefinitionMap>((accumulator, componentMeta) => {
    const playgroundConfig = playgrounds[componentMeta.id];
    if (!playgroundConfig) {
      throw new Error(`Missing playground config for component "${componentMeta.id}".`);
    }

    accumulator[componentMeta.id] = { ...componentMeta, ...playgroundConfig };
    return accumulator;
  }, {});
}
