/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": ["prettier --write"],
  "*.mdx": "prettier --write",
};

export default lintStagedConfig;
