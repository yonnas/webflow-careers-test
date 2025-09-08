const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/webflow-components/JobsPage/JobsPage.webflow.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webflow-bundle.js",
    library: {
      type: "umd",
      name: "JobsPage",
    },
    globalObject: "this",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/devlink": path.resolve(__dirname, "devlink"),
      "@/devlink/*": path.resolve(__dirname, "devlink/*"),
    },
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-transform-class-properties",
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                  helpers: true,
                  useESModules: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, "devlink"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-class-properties",
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                  helpers: true,
                  useESModules: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: false,
  },
  devtool: "source-map",
};
