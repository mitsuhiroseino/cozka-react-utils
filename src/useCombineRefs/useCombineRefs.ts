import { Ref, useCallback } from 'react';
import setRef from '../setRef';

/**
 * 複数のrefに纏めて値を渡すことができるrefを取得する
 * @param refs
 * @returns
 */
export default function useCombineRefs<T = any>(...refs: Ref<T>[]) {
  const setter = useCallback((value: T) => {
    for (const ref of refs) {
      setRef(ref, value);
    }
  }, refs);
  return setter;
}
