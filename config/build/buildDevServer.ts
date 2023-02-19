import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { IBuildOptions } from './types/config';

export function buildDevServer({ port }: IBuildOptions): DevServerConfig {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
