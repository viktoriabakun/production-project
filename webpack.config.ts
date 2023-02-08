import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BUILD_MODE, IBuildEnv, IBuildPaths} from "./config/build/types/config";

export default (env: IBuildEnv) => {
     /**
     * MODE
     */
    const mode = env.mode || BUILD_MODE.DEV;
    const isDev = mode === BUILD_MODE.DEV;

    /**
     * DEV SERVER
     */
    const PORT = env.port || 3000;

    /**
     * PATHS
     */
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    }

    /**
     * WEBPACK CONFIG
     */
    return buildWebpackConfig(
        {
            mode,
            isDev,
            paths,
            port: PORT,
        }
    );
};
