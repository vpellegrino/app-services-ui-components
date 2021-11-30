module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-xstate-addon/preset",
    "storybook-i18n/preset",
  ],
  features: {
    interactionsDebugger: true,
  },
};
