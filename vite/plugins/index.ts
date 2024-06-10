import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import progress from 'vite-plugin-progress';
import autoImportDeps from './auto-import';
import autoRegistryComponents from './components';
import createCompression from './compression';
import createHtml from './html';
import createIcon from './icons';
import viteRestartConfig from './restart';
import htmlVersion from './version';
import visualizerConfig from './visualizer';
import type { PluginOption } from 'vite';

export default function getVitePlugins(viteEnv: any, isBuild = false) {
	const vitePlugins: PluginOption[] = [vue(), vueJsx()];
	// 自动按需引入依赖
	vitePlugins.push(autoImportDeps());
	// 自动注册组件
	vitePlugins.push(autoRegistryComponents());
	// html模板注入
	vitePlugins.push(...createHtml(viteEnv, isBuild));
	// iconify图标
	vitePlugins.push(createIcon());
	// 构建时显示进度条
	vitePlugins.push(progress());
	if (isBuild) {
		// html版本注入
		vitePlugins.push(htmlVersion());
		vitePlugins.push(...createCompression(viteEnv));
		vitePlugins.push(visualizerConfig(viteEnv));
	} else {
		// 监听配置文件改动重启
		vitePlugins.push(viteRestartConfig());
	}
	return vitePlugins;
}
