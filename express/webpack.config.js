import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'; //LICENSE.txtを出力しないようにする。

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  target: 'node',
  devtool: 'inline-source-map',
  //起点となるファイル
  entry: {
    index: join(__dirname, 'src/index.ts'),
  },
  //出力の設定
  output: {
    path: join(__dirname, 'dist'), //出力左記のフォルダ名を設定する
    filename: '[name].js', //jsファイルのファイル名を指定する [name]とするとentryのキーでjsファイルを作成する
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // publicディレクトリに配置する静的リソースやmanifest.json等を移送する
  plugins: [
    //CopyWebpackPlugin ビルド時にコピーするプラグイン
    new CopyWebpackPlugin({ patterns: [{ from: 'public/main.bat', to: '' }] }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/start.vbs', to: '' }] }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/stop.bat', to: '' }] }),
  ],
  //LICENSE.txtを出力しないようにする。
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
