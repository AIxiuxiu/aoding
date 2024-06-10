// @see https://stylelint.bootcss.com/

/** @type {import('stylelint').Config} */
module.exports = {
	root: true,
	extends: [
		'stylelint-config-standard', // 配置stylelint拓展插件
		'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
	],
	plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
	overrides: [
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['*.scss', '**/*.scss'],
			customSyntax: 'postcss-scss',
			extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
		},
	],
	/**
	 * null  => 关闭该规则
	 * always => 必须
	 */
	rules: {
		'prettier/prettier': true,
		'font-family-no-missing-generic-family-keyword': null,
		'color-function-notation': ['legacy', { ignore: ['with-var-inside'] }],
		'alpha-value-notation': 'number',
		'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
		'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
		'no-empty-source': null, // 关闭禁止空源码
		'selector-class-pattern': null, // 关闭强制选择器类名的格式
		'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
		// 'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
		'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
		'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
		'scss/dollar-variable-pattern': null,
		'scss/at-mixin-pattern': null,
		'selector-pseudo-class-no-unknown': [
			// 不允许未知的选择器
			true,
			{
				ignorePseudoClasses: ['global', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
			},
		],
	},
	ignoreFiles: ['node_modules/**', 'dist/**', '**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
