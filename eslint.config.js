import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import parserVue from 'vue-eslint-parser';
import typeScriptEslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineFlatConfig([
	{
		ignores: ['node_modules/**/*', 'dist/**/*', 'components.d.ts', 'auto-import.d.ts', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
		...pluginJs.configs.recommended,
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...configPrettier.rules,
			...pluginPrettier.configs.recommended.rules,
			'no-debugger': 'off',
			'no-unused-vars': [
				'error',
				{
					args: 'none',
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},
	{
		files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
		languageOptions: {
			parser: typeScriptEslint.parser,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': typeScriptEslint.plugin,
		},
		rules: {
			...typeScriptEslint.configs.recommended.rules,
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/no-redeclare': 'error',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/prefer-as-const': 'warn',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }],
			'@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
			'prefer-const': [
				'error',
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: false,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'eslint-comments/no-unlimited-disable': 'off',
			'import/no-duplicates': 'off',
			'unused-imports/no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.?([cm])js'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
	{
		files: ['**/*.vue'],
		languageOptions: {
			globals: {
				defineProps: 'readonly',
				defineEmits: 'readonly',
				defineExpose: 'readonly',
				withDefaults: 'readonly',
			},
			parser: parserVue,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				extraFileExtensions: ['.vue'],
				parser: typeScriptEslint.parser,
				sourceType: 'module',
			},
		},
		plugins: {
			vue: pluginVue,
		},
		processor: pluginVue.processors['.vue'],
		rules: {
			...pluginVue.configs.base.rules,
			...pluginVue.configs['vue3-essential'].rules,
			...pluginVue.configs['vue3-recommended'].rules,
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',
			'vue/require-explicit-emits': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-setup-props-reactivity-loss': 'off',
			'prefer-const': [
				'error',
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: false,
				},
			],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'always',
						component: 'always',
					},
					svg: 'always',
					math: 'always',
				},
			],
		},
	},
	{
		files: ['**/*.vue', '**/*.?([cm])ts', '**/*.?([cm])tsx'],
		plugins: {
			import: pluginImport,
			'unused-imports': unusedImports,
		},
		rules: {
			'import/first': 'error',
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
					pathGroups: [
						{
							pattern: 'vue',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '@vue/**',
							group: 'external',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['type'],
				},
			],
			'unused-imports/no-unused-imports': 'warn',
			// 如需保存时自动删除未引用代码，可注释掉该规则
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
]);
