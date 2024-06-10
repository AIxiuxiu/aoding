import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; //添加element-plus
import IconsResolver from 'unplugin-icons/resolver';

/**
 * 组件自动按需导入
 */
export default function autoRegistryComponents() {
	return Components({
		globs: ['**/src/components/*.vue'],
		dts: 'src/types/components.d.ts', // 引入组件的,包括自定义组件存放的位置

		resolvers: [
			ElementPlusResolver({ importStyle: 'sass' }), //引入element-plus
			// Icon自动引入解析器
			IconsResolver({
				// 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
				prefix: 'icon',
				// 当图标集名字过长时，可使用集合别名
				alias: {
					system: 'system-uicons',
				},
				// 标识自定义图标集
				customCollections: ['an'],
				// prefix - 前缀，默认为 i，上面我们配置成了 icon，即组件名以 icon 开头
				// collection - 图标集名
				// icon - 图标名
				// {prefix}-{collection}-{icon}
				// 当然大驼峰也可以
			}),
		],
	});
}
