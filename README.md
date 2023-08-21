# ti

## 简介

基于[@TomSawyer2](https://github.com/TomSawyer2)使用习惯的前后端框架生成工具。

## 使用方式

```bash
pnpm i @tomsawyer2/ti
ti create -t <type> -k <kit> -n <name>
```

指令说明：

| 名称 | 简写 | 说明 |
| --- | --- | --- |
| create | c | 创建框架代码 |

参数说明：

| 名称 | 简写 | 说明 |
| --- | --- | --- |
| --type | -t | 指定框架类型（为fe、be的枚举） |
| --kit | -k | 指定框架预设（具体预设见下） |
| --name | -n | 指定项目名称 |

框架类型（type）与框架预设（kit）的映射：

- fe
  - umi-starter React + Umi + TS的预设
  - umi-pwa React + Umi + TS + PWA的预设
- be
  - nest-starter Nest.JS + TS + MySQL的预设

## 开发

```bash
pnpm i
pnpm build
```

一些新增预设的tips：

- 在预设文件内可以通过`{{ @ti.inject="xxx" }}`指定名为xxx变量的占位符，在生成代码时会将命令行中的xxx变量注入到对应位置。

## 发布

修改`package.json`中的版本号，打好tag，推代码和tag之后直接在GitHub中设置Releases，自动发版至npm。
