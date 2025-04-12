import { createElement, ElementType, Key } from 'react';

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
  return createElement(type, props);
}
