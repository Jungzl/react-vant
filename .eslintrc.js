module.exports = {
  root: true,
  extends: ['@react-vant'],
  ignorePatterns: ['/.*'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    // 下面是新加的
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-no-constructed-context-values': 'off',
    'react/display-name': 'off',
  },
};
