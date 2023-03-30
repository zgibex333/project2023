import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module?.rules?.map((rule) => {
        if (rule !== '...') {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
        }
        return rule;
    });
    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoaders(true));
    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    return config;
};
