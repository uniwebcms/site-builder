const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;

dotenv.config({ path: './.env.local' });
dotenv.config({ path: './.env' });

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';

    const COMPONENTS_MODULE_URL = process.env.COMPONENTS_MODULE_URL;

    if (!COMPONENTS_MODULE_URL) {
        throw new Error('COMPONENTS_MODULE_URL is required. Please provide it in .env');
    }

    return {
        mode,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: 'auto',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.(woff2?|ttf|eot)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024 // 8kb
                        }
                    },
                    generator: {
                        filename: 'images/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.csl$/,
                    type: 'asset/source'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'), // Source folder
                        to: path.resolve(__dirname, 'dist'), // Destination folder
                        globOptions: {
                            ignore: ['**/index.html'] // ✅ Ignore index.html
                        }
                    }
                ]
            }),
            new ModuleFederationPlugin({
                name: 'site-builder',
                remotes: {
                    WebsiteRemote: `WebsiteRemote@${COMPONENTS_MODULE_URL}/remoteEntry.js`
                },
                shared: {
                    react: { singleton: true, requiredVersion: '^18.2.0' },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: '^18.2.0'
                    },
                    'react-router-dom': {
                        singleton: true,
                        requiredVersion: '^6.4.2'
                    }
                }
            })
        ],
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname, 'dist')
            },
            port: 3000
            // proxy: [
            //     {
            //         context: ['/content.json', '/assets'],
            //         target: 'http://localhost:3000'
            //     }
            // ]
        },
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    };
};
