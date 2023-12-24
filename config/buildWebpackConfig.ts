import webpack from "webpack"
import { buildDevServer } from "./build/buildDevServer"
import { buildLoaders } from "./build/buildLoaders"
import { buildPlugins } from "./build/buildPlugins"
import { buildResolvers } from "./build/buildResolvers"
import { BuildOptions } from "./build/types/config"

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { paths, mode, isDev } = options

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev && "inline-source-map",
		devServer: isDev ? buildDevServer(options) : {},
	}
}
