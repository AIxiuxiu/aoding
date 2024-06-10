import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
// vite插件
import getVitePlugins from './vite/plugins';
import type { ViteSSGOptions } from 'vite-ssg';

// https://vitejs.dev/config/
export default ({ mode, command }: any) => {
	const env = loadEnv(mode, process.cwd());
	return defineConfig({
		envDir: process.cwd(),
		base: env.VITE_SERVER_BASE,
		plugins: getVitePlugins(env, command === 'build'),
		server: {
			port: +env.VITE_SERVER_PORT,
			host: '0.0.0.0', // IP配置，支持从IP启动
			hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
			open: false,
		},
		build: {
			outDir: env.VITE_BUILD_OUTDIR,
			sourcemap: env.VITE_BUILD_SOURCEMAP == 'true',
			emptyOutDir: true,
			minify: 'esbuild',
			reportCompressedSize: false,
			chunkSizeWarningLimit: 2048,
			rollupOptions: {
				// 静态资源分类打包
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
				},
			},
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					charset: false,
					additionalData: `@use "@/styles/element.scss" as *; `,
				},
			},
		},
		// 删除 console
		esbuild: {
			drop: env.VITE_BUILD_DROP_CONSOLE == 'true' ? ['console', 'debugger'] : ['debugger'],
		},
		ssr: {
			noExternal: ['element-plus', 'vue-i18n'],
		},
		ssgOptions: {
			crittersOptions: {
				//  options: https://github.com/GoogleChromeLabs/critters#usage
				preload: 'media',
			},
		} as ViteSSGOptions,
	});
};
