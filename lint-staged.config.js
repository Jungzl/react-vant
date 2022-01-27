module.exports = {
  '*.{ts,tsx,js,less,md}': 'prettier --write',
  '*.{ts,tsx,js}': 'eslint --fix',
  '*.{css,less}': 'stylelint --fix',
  'package.json': 'pnpm sort-package-json',
};
