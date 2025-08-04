/**
 * webpack.config.js
 * Webpack production configuration for building a React project.
 * Includes JavaScript and CSS processing, image optimization, WebP generation,
 * SVG cleanup, code splitting, and output manifest generation.
 *
 * Author: Yumi Takuma
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "assets/js/[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024, // 25kB
              fallback: "file-loader",
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              outputPath: "assets/images",
              mozjpeg: {
                progressive: true,
                quality: 50,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.6, 0.8],
                speed: 4,
                strip: true,
                max: 10240, // 25kB
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 50,
              },
            },
          },
        ],
      },
      {
        test: /\.(ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [
                { removeViewBox: false },
                { removeDimensions: true },
                { removeTitle: true },
                { removeDesc: true },
                { removeComments: true },
                { removeMetadata: true },
                { removeUselessDefs: true },
                { removeXMLNS: true },
                { removeEditorsNSData: true },
                { cleanupAttrs: true },
                { collapseGroups: true },
                { convertColors: true },
                { convertPathData: true },
                { convertShapeToPath: true },
                { mergePaths: true },
                { removeRasterImages: true },
                { sortAttrs: true },
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: "vendor-react",
          chunks: "all",
        },
      },
    },
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { quality: 50, progressive: true }],
              ["optipng", { optimizationLevel: 25 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      base: "./",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "" },
        { from: "public/index.php", to: "index.php" },
      ],
    }),
    new WebpackManifestPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};
