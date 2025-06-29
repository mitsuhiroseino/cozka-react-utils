import { MutableRefObject, Ref } from 'react';

/**
 * refにcurrentを設定する
 * @param value
 * @param refs
 */
export default function setRefCurrent<T = any>(
  value: T | null,
  ...refs: (Ref<T> | null | undefined)[]
): undefined | void | (() => void) {
  for (const ref of refs) {
    if (typeof ref === 'function') {
      return ref(value);
    } else if (ref) {
      (ref as MutableRefObject<T>).current = value;
    }
  }
}
