import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
const cssnano = require("cssnano");

const extension = [".ts", ".js", ".tsx"];

module.exports = [
    typescript({
        lib: ["es5", "es6", "dom"],
        target: "es5",
        noEmitOnError: true,
    }),
    resolve({ mainFields: ["module", "main", "browser"] }), //指定在package.json中扫描的属性
    commonjs({ extensions, sourceMap: true }),
    babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        babelHelpers: "bundled",
        extensions,
        plugins: [["@vue/babel-plugin-jsx"]],
    }),
    postcss({
        plugins: [cssnano],
        extract: true,
    }),
];
