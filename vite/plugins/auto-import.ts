import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; //添加element-plus

export default function autoImportDeps() {
	return AutoImport({
		//安装后在组件中不用再导入ref，reactive等
		imports: ['vue', 'vue-router'], // 自动引入的三方库
		resolvers: [ElementPlusResolver({ importStyle: 'sass' })], // 引入element-plus
		dts: 'src/types/auto-import.d.ts', // 全局自动引入文件存放路径；不配置保存在根目录下；配置为false时不会生成 auto-imports.d.ts 文件，但不影响使用
	});
}
