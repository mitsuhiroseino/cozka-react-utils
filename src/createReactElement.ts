import { Children, ElementType, Key } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

/**
 * jsxまたはjsxsでReactElementのインスタンスを作成する
 * @param type コンポーネント
 * @param props プロパティ
 * @param key キー
 * @returns エレメント
 */
export default function createReactElement(
  type: ElementType,
  props: any,
  key?: Key,
) {
  if (Children.count(props.children) > 1) {
    return jsxs(type, props, key);
  } else {
    return jsx(type, props, key);
  }
}
