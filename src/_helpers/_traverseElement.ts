import { Children, Fragment, isValidElement, ReactNode } from 'react';
import _isIterable from './_isIterable';

/**
 * React.Fragmentを透過し、children内のReactElementを処理する
 * @param children エレメントの子要素
 * @param callback コールバック
 * @param collect コールバックの結果を収集する処理
 */
export default function _traverseElement<N, T>(
  children: ReactNode,
  callback: (node: N, index: number) => T,
  collect: (value: T) => void = () => {},
): void {
  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        _traverseElement(child.props.children, callback, collect);
      } else {
        collect(callback(child as N, index));
      }
    } else if (_isIterable(child) && typeof child !== 'string') {
      _traverseElement(child, callback, collect);
    }
  });
}
