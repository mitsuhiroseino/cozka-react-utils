import { useRef } from 'react';
import { UsePreviousValueOptions } from './types';

/**
 * 前回の値を返すhook
 * @param value 現在の値
 * @param options オプション
 * @returns 前回の値
 */
export default function usePreviousValue<T = any>(
  value: T,
  options: UsePreviousValueOptions = {},
): T {
  const { initialValue, prevOnChange } = options;
  const prevValueRef = useRef<T>(initialValue);
  const prevValue = prevValueRef.current;
  if (!prevOnChange || prevValue !== value) {
    prevValueRef.current = value;
  }
  return prevValue;
}
