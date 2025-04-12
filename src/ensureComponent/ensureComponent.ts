import { ComponentType, ElementType, forwardRef } from 'react';
import createReactElement from '../createReactElement';

const map = new Map<string, ComponentType<any>>();

/**
 * 組み込みタグの場合はコンポーネントに変換して返す
 * @param component 組み込みタグ or コンポーネント
 * @returns コンポーネント
 */
export default function ensureComponent<P = {}>(
  component: ElementType<P>,
): ComponentType<P> {
  if (typeof component === 'string') {
    if (!map.has(component)) {
      const Comp = forwardRef((props, ref) => {
        return createReactElement(component, { ...props, ref });
      });
      Comp.displayName = component;
      map.set(component, Comp);
    }
    return map.get(component);
  } else {
    return component;
  }
}
