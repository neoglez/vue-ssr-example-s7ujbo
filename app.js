import { createSSRApp, h } from 'vue';

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    render: () => {
      return h('div', { onClick: () => (this.count += 1) }, '' + this.count);
    },
  });
}
