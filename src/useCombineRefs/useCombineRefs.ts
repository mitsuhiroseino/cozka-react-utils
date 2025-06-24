import { Ref, useCallback } from 'react';
import setRef from '../setRefCurrent';

/**
 * 複数のrefに纏めて値を渡すことができるrefを取得する
 * @param refs
 * @returns
 */
export default function useCombineRefs<T = any>(...refs: Ref<T>[]) {
  const setter = useCallback((value: T) => {
    setRef(value, ...refs);
  }, refs);
  return setter;
}
