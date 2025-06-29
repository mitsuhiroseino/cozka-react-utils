import { MutableRefObject, RefCallback } from 'react';

/**
 * refにcurrentを設定する
 * @param value
 * @param refs
 * @returns クリーンアップ関数
 */
export default function setRefCurrent<T = any>(
  value: T | null,
  ...refs: (RefCallback<T> | MutableRefObject<T> | null | undefined)[]
): () => void {
  const cleanups = [];
  for (const ref of refs) {
    if (typeof ref === 'function') {
      const cleanup = ref(value);
      if (typeof cleanup === 'function') {
        cleanups.push(cleanup);
      } else {
        cleanups.push(() => {
          ref(null);
        });
      }
    } else if (ref) {
      ref.current = value;
      cleanups.push(() => {
        ref.current = null;
      });
    }
  }
  return () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  };
}
