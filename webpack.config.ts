import path from "path"
import webpack from "webpack"
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config"
import { buildWebpackConfig } from "./config/buildWebpackConfig"

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
	}

	const mode: BuildMode = env.mode || "development"

	const isDev = mode === "development"

	const PORT = env.port

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	})

	return config
}
