export type UsePreviousValueOptions<V = any> = {
  /**
   * 初期値
   */
  initialValue?: V;

  /**
   * 変更される前の値を返す
   * デフォルトはfalse
   *
   * - `true`: 変更される前の値を返す
   * - `false`: 前回render時の値を返す
   */
  prevOnChange?: boolean;
};
