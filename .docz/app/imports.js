export const imports = {
  'CREATE_REACT_APP.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "create-react-app" */ 'CREATE_REACT_APP.md'
    ),
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
}
