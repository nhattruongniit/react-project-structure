### Pattern design
- [atomic design](https://atomicdesign.bradfrost.com/chapter-2/)
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

# Convention code

## Component's file name should be in Pascal Case.

Component names should be like ProductCard and not like productCard, product-card, etc. This way when we see a filename in Pascal Case, it is immediately clear that the file is a react component.

## Component having own folders should have a component file with the same name.

This way when we search for files, we don't get a list of <b>index.ts</b> but will receive the actual component files.

## Create an index.ts file in that component folder which export the named component.
```
import Product from './Product';
export default Product;
```

or

```
export { default } from './Product';
```

### Components which can be used in other project or reuse.

Components can be keep in `components/` folder (atom, molecules...). You can refer design system of Atomic Design.

https://bradfrost.com/blog/post/atomic-web-design/

## Hooks

When we want to share logic between two javascript functions, we will extract it to a third function. Both components and hooks are functions, so this work for them too.

A custom Hook is a javascript function whose name starts with `"use"` and that may call other hook. For example, `use-translation` below is a custom hook:

```bash
# use-translation.tsx
import { useTranslation } from 'react-i18next';
const useTranslate = () => {
  const { t: translate, i18n } = useTranslation();
  return { translate, i18n };
};
export default useTranslate;
```

## Utils

Share an function logic for our app. It name should be in lowercase. For example, `sleep` below is a function.

```bash
# sleep.ts
export const sleep = time => new Promise(res => setTimeout(res, time));
```