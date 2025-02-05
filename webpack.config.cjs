const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const mode = isProduction ? "production" : "development";

  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      publicPath: "auto",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(woff2?|ttf|eot)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash][ext]",
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            filename: "images/[name].[hash][ext]",
          },
        },
      ],
    },
    plugins: [
      new DotenvWebpack({
        systemvars: true,
        ignoreStub: true,
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            to: "dist",
            globOptions: {
              ignore: ["index.html"],
            },
          },
        ],
      }),
      new ModuleFederationPlugin({
        name: "website",
        remotes: {
          components: `components@${process.env.COMPONENTS_MODULE_URL}/remoteEntry.js`,
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      }),
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      proxy: [
        {
          context: ["/content.json", "/assets"],
          target: "http://localhost:3000",
        },
      ],
    },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  };
};
