import fs from "fs";
import path from "path";
import gulp from "gulp";
import mocha from "gulp-spawn-mocha";
import replace from "gulp-replace";
import rimraf from "rimraf";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  path: {
    output: "dist",
    test: "src/**/*.test.js",
  },
  mocha: {
    require: [ "babel-core/register", "babel-polyfill" ],
    env: { NODE_PATH: "src/client" },
    reporter: "list",
  },
  watch: false,
};

gulp.task("test", () =>
  gulp.src(config.path.test, { read: false })
    .pipe(mocha(config.mocha))
);

gulp.task("clean", done => {
  rimraf(config.path.output, done);
});

gulp.task("watch", done => {
  config.watch = true;
  gulp.start("client");
});

gulp.task("server", done => {
  webpack({
    target: "node",
    entry: {
      server: "./src/server/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, config.path.output),
    },
    node: {
      __filename: false,
      __dirname: false,
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }],
    },
    externals: [
      nodeExternals(),
    ],
  }, (err, stats) => {
    console.log(stats.toString("minimal"));
    done();
  });
});

gulp.task("client", done => {
  webpack({
    watch: config.watch,
    entry: {
      app: "./src/client/index.js",
    },
    output: {
      filename: "[name]-[chunkhash].js",
      path: path.resolve(__dirname, config.path.output, "assets"),
      publicPath: "/assets/",
    },
    resolve: {
      modules: [
        "node_modules",
        "src/client",
      ],
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        query: {
          name: "[hash].[ext]",
        },
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [
                "node_modules",
                "src/client",
              ],
              data: "@import 'scss/variables';",
            },
          }],
        }),
      }],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: module =>
          module.context && module.context.indexOf("node_modules") !== -1,
      }),
      new ExtractTextPlugin({
        filename: "[name]-[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        template: "src/client/index.html",
        filename: "../index.html",
        favicon: "src/client/scss/img/favicon.png",
      }),
    ],
  }, (err, stats) => {

    console.log(stats.toString("minimal"));

    if (!config.watch)
      done();
  });
});
