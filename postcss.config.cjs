// postcss.config.js
module.exports = {
	plugins: {
		// 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
		autoprefixer: {
			overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
			grid: false,
		},
		'postcss-px-to-viewport-update': {
			// 需要转换的单位，默认为"px"
			unitToConvert: 'px',
			viewportWidth: 375,
			// 单位转换后保留的精度
			unitPrecision: 4,
			// 能转化为vw的属性列表
			propList: ['*'],
			// 希望使用的视口单位
			viewportUnit: 'vw',
			// 字体使用的视口单位
			fontViewportUnit: 'vw',
			// 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
			minPixelValue: 1,
			// 仅转换的文件，这里不要使用 \/ 去匹配文件
			include: [/mobile\//],
		},
	},
};
