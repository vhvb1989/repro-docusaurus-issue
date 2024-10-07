import { LoadContext, Plugin } from '@docusaurus/types';

export default function dynamicRouter(context: LoadContext, options: {}): Plugin<void> {
  return {
    name: 'dynamic-router-plugin',
    async contentLoaded({ actions }) {
      const { addRoute } = actions;
      addRoute({
        path: '/path/:id',
        component: '@site/src/components/Foo',
        exact: true,
      });
    },
  };
}
