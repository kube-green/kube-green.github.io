// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      react,
    },
    settings: {
      "import/resolver": {
        "node": {
            "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx"
            ]
        }
      },
      "react": {
          "version": "detect"
      }
    },
    rules: {
      "import/extensions": [
          "error",
          "ignorePackages",
          {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
          }
      ],
      "import/no-unresolved": [2, {
          "ignore": ["^@theme", "^@docusaurus", "typescript-eslint"]
      }],
      "no-use-before-define": 0,
      "react/jsx-filename-extension": [2, {
          "extensions": [".jsx", ".js", ".tsx", ".ts"]
      }],
      "react/jsx-props-no-spreading": [2, {
          "exceptions": ["Feature"]
      }],
      "react/jsx-sort-props": [2],
      "react/no-unescaped-entities": [0]
    },
  },
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-require-imports': 0,
    }
  }
);


