# @cozka/react-utils

`@cozka/react-utils` is a package that provides utilities available for use in React.

**[日本語のREADMEはこちら](./README.ja.md)**

## Installation

```sh
npm install @cozka/react-utils
```

## Usage

### extendElement

This function merges the properties passed via `props` with the `element`'s `props` and executes `cloneElement`. The merging rules are as follows:

- `className`: Concatenates `element`'s value first and `props`'s value second.
- `style`: Only updates `element.style` with properties from `props.style` if they are not `undefined`.
- Others: Only updates `element.props` with `props` values that are not `undefined`.

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

This function processes only `ReactElement`, `string`, and `number` types from `children` using the provided `callback`. If `React.Fragment` is included, it processes the children of `React.Fragment` based on the above criteria.

```typescript
import forEachContent from '@cozka/react-utils/forEachContent';

forEachContent(children, (child) => {
  // Logs only children of type ReactElement, string, or number
  console.log(child);
});
```

### forEachElement

This function processes only `ReactElement` types from `children` using the provided `callback`. If `React.Fragment` is included, it processes the children of `React.Fragment` based on the above criteria.

```typescript
import forEachElement from '@cozka/react-utils/forEachElement';

forEachElement(children, (child) => {
  // Logs only children of type ReactElement
  console.log(child);
});
```

### setRef

This function sets a value to a function or object ref. If the ref is `null`, no action is taken.

```typescript
import setRef from '@cozka/react-utils/setRef';

// For function refs, the value is passed as an argument to the function
setRef((v) => {
  console.log(v);
}, value);

// For object refs, the value is assigned to current
setRef(
  {
    current: null,
  },
  value,
);

// No action is taken if the ref is null
setRef(null, value);
```

### transformContent

This function processes only `ReactElement`, `string`, and `number` types from `children` using the provided `callback` and returns the result. If `React.Fragment` is included, it processes the children of `React.Fragment` based on the above criteria.

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

This function processes only `ReactElement` types from `children` using the provided `callback` and returns the result. If `React.Fragment` is included, it processes the children of `React.Fragment` based on the above criteria.

```typescript
import transformElement from '@cozka/react-utils/transformElement';

const nodes = transformElement(children, (child) => {
  return extendElement(child, { className: 'gsk-el' });
});
```

### useCombineRefs

This hook returns a ref that can forward its value to multiple refs.

```tsx
import useCombineRefs from '@cozka/react-utils/useCombineRefs';

// Pass ref1, ref2, ref3 and obtain a new ref
const ref = useCombineRefs(ref1, ref2, ref3);

// The ref will forward the SpanHTMLElement to ref1, ref2, ref3
return <span ref={ref} />;
```

## License

MIT License
