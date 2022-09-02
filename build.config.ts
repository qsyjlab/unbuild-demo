/*
 * @Description:
 * @Autor: qsyj
 * @Date: 2022-09-02 11:47:08
 * @LastEditors: qsyj
 * @LastEditTime: 2022-09-02 14:43:38
 */

import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // 单个包
  // entries: ["src/index"],

  // 保留原有目录
  entries: [
    // './src/index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    {
      builder:"mkdist",
      input: "./src/",
      outDir: "./dist/es",
      format: "esm",
      ext: "mjs",
      declaration: true,
    },
    {
      builder: "mkdist",
      input: "./src/",
      outDir: "./dist/lib",
      format: "cjs",
      ext: "cjs",
      declaration: true,
    },
  ],
  // // 是否生成对应的ts类型
  declaration: true,
  // 是否清除打包产物
  clean: true,
  // stub:true,
  rollup: {
    // 是否生成 cjs
    emitCJS: true,
    // cjsBridge:true,
    // inlineDependencies:true
  
  },
  // rootDir: process.cwd(),
});
