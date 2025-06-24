# @cozka/react-utils

`@cozka/react-utils` は、Reactで利用可能なユーティリティを提供するパッケージです。

**[English README is available here](./README.md)**

## インストール

```sh
npm install @cozka/react-utils
```

## 使い方

### extendElement

`props`で渡したプロパティを`element`の`props`とマージして`cloneElement`を実行します。
マージの際のルールは下記のとおりです。

- `className`: `element`の値を先、`props`の値を後にして結合
- `style`: `props`の`style`直下のプロパティが`undefined`以外のときのみ`element.style`に反映
- 上記以外: `props`の値が`undefined`以外のときのみ`element.props`に反映

```typescript
import extendElement from '@cozka/react-utils/extendElement';

console.log(element.props);
// OUTPUT: { className: 'el', style: { backgroundColor: 'black' }, checked: true }

const extendedElement = extendElement(element, {
  className: 'gsk-el',
  style: {
    color: 'red',
  },
  value: 'ABC',
});

console.log(extendedElement.props);
// OUTPUT: { className: 'el gsk-el', style: { backgroundColor: 'black', color: 'red' }, checked: true, value: 'ABC' }
```

### forEachContent

`children`の中から`ReactElement`, `string`, `number`のものだけを`callback`で処理します。
またエレメントに`React.Fragment`が含まれる場合は、`React.Fragment`の子要素を上記の基準で処理します。

```typescript
import forEachContent from '@cozka/react-utils/forEachContent';

forEachContent(children, (child) => {
  // 型がReactElement,string,numberのchildのみログ出力
  console.log(child);
});
```

### forEachElement

`children`の中から`ReactElement`のものだけを`callback`で処理します。
またエレメントに`React.Fragment`が含まれる場合は、`React.Fragment`の子要素を上記の基準で処理します。

```typescript
import forEachElement from '@cozka/react-utils/forEachElement';

forEachElement(children, (child) => {
  // 型がReactElementのchildのみログ出力
  console.log(child);
});
```

### setRefCurrent

関数型またはオブジェクト型のrefに値を設定します。
refが`null`の場合は処理を行いません。

```typescript
import setRefCurrent from '@cozka/react-utils/setRefCurrent';

// 関数型のrefの場合は引数にvalueを渡して実行される
setRefCurrent(value, (v) => {
  console.log(v);
});

// オブジェクトからのrefの場合はcurrentにvalueが設定される
setRefCurrent(value, {
  current: null,
});

// nullの場合は処理しない
setRefCurrent(value, null);
```

### transformContent

`children`の中から`ReactElement`, `string`, `number`のものだけを`callback`で処理した戻り値を返します。
またエレメントに`React.Fragment`が含まれる場合は、`React.Fragment`の子要素を上記の基準で処理します。

```typescript
import transformContent from '@cozka/react-utils/transformContent';

const nodes = transformContent(children, (child) => {
  if (typeof child === 'string' || typeof child === 'number') {
    return <span className="gsk-el">{child}</span>;
  } else {
    return extendElement(child, { className: 'gsk-el' });
  }
});
```

### transformElement

`children`の中から`ReactElement`のものだけを`callback`で処理した戻り値を返します。
またエレメントに`React.Fragment`が含まれる場合は、`React.Fragment`の子要素を上記の基準で処理します。

```typescript
import transformElement from '@cozka/react-utils/transformElement';

const nodes = transformElement(children, (child) => {
  return extendElement(child, { className: 'gsk-el' });
});
```

### useCombineRefs

複数のrefに値を渡すことができるrefを返します。

```tsx
import useCombineRefs from '@cozka/react-utils/useCombineRefs';

// ref1, ref2, ref3を渡して新たなrefを取得
const ref = useCombineRefs(ref1, ref2, ref3);

// refを通してref1,ref2,ref3にSpanHTMLElementが渡される
return <span ref={ref} />;
```

## ライセンス

MIT License
