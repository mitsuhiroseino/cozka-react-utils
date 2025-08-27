import { ComponentType, createElement, ElementType, forwardRef } from 'react';

const cache = new Map<string, ComponentType<any>>();

/**
 * 組み込みタグの場合はコンポーネントに変換して返す
 * @param component 組み込みタグ or コンポーネント
 * @returns コンポーネント
 */
export default function ensureComponent<P = {}>(
  component: ElementType<P>,
): ComponentType<P> {
  if (typeof component === 'string') {
    if (!cache.has(component)) {
      const Comp = forwardRef((props, ref) => {
        return createElement(component, { ...props, ref });
      });
      Comp.displayName = component;
      cache.set(component, Comp);
    }
    return cache.get(component);
  } else {
    return component;
  }
}
