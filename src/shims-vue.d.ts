/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  interface ElementAttrs {
    domPropsInnerHTML?: string;
}
  export default component
}