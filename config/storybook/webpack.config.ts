import webpack from 'webpack';
import path from 'path';
import { IBuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

/**
 * Storybook webpack config
 */
export default ({ config }: {config: webpack.Configuration}) => {
    const paths: IBuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildCssLoaders(true));

    return config;
};
