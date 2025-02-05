const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const mode = isProduction ? "production" : "development";

  // Check if public directory exists
  const publicDirExists = fs.existsSync(path.join(__dirname, "public"));

  // Base plugins array
  const plugins = [
    new DotenvWebpack({
      systemvars: true,
      ignoreStub: true,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "website",
      remotes: {
        components: `components@${process.env.COMPONENTS_MODULE_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
      },
    }),
  ];

  // Add CopyPlugin only if public directory exists and has files to copy
  if (publicDirExists) {
    const publicFiles = fs
      .readdirSync(path.join(__dirname, "public"))
      .filter((file) => file !== "index.html");

    if (publicFiles.length > 0) {
      plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "public",
              to: ".",
              globOptions: {
                ignore: ["**/index.html"],
              },
            },
          ],
        })
      );
    }
  }

  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
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
    plugins,
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      proxy: {
        "/content.json": "http://localhost:3000",
        "/assets": "http://localhost:3000",
      },
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
