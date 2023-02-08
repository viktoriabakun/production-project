import {IBuildOptions} from "./types/config";
import {Configuration as DevServerConfig} from "webpack-dev-server";

export function buildDevServer({port}: IBuildOptions): DevServerConfig {
 return {
     port,
     open: true,
     historyApiFallback: true
 }
}
