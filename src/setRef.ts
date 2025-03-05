import { MutableRefObject, Ref } from 'react';

/**
 * refにvalueを設定する
 * @param ref
 * @param value
 */
export default function setRef<T = any>(ref: Ref<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    (ref as MutableRefObject<T>).current = value;
  }
}
