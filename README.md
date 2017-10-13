# iswitch
一个实现Switch功能的Web组件，支持原生JavaScript及jQuery、Vue、React、Angular等框架。

# 效果
[图片示例待添加]

# 功能
- 核心Switch效果
- 滑动动画
- 句柄滑动、按住效果
- 支持`change`事件
- 支持`change`**前**事件
- 支持`disabled`、`loading`、`readonly`状态
- 自定义设置`动画`、`尺寸`、`颜色`

# 实现进度
| 平台        | 包名             | 版本        | 备注        |
| ----------- | --------------- | ----------- | ----------- |
| ![image](https://img.shields.io/badge/-原生JS-f7e032.svg)      | iswitch-js       |            | 实现中...    |
| ![image](https://img.shields.io/badge/-Vue-41b883.svg) | iswitch-vue | | 实现中... |
| ![image](https://img.shields.io/badge/-React-61dafb.svg) | iswitch-react | | 实现中... |
| ![image](https://img.shields.io/badge/-Angular-dd1b16.svg)     | iswitch-angular  |            | 实现中...    |

# 使用
iSwitch组件支持在多种JS框架中运行，请挑选适合你的，安装并使用她。

## 安装
### 直接在页面中引用
- 本地引用
```html
<!--原生JS版本-->
<script src="~/iswitch-js/dist/index.js"></script>
<!--Vue版本-->
<script src="~/iswitch-vue/dist/index.js"></script>
<!--React版本-->
<script src="~/iswitch-react/dist/index.js"></script>
<!--Angular版本-->
<script src="~/iswitch-angular/dist/index.js"></script>
```
- CDN引用
```html
<!--原生JS版本-->
<script src="~/iswitch-js/1.0.0/dist/index.js"></script>
<!--Vue版本-->
<script src="~/iswitch-vue/1.0.0/dist/index.js"></script>
<!--React版本-->
<script src="~/iswitch-react/1.0.0/dist/index.js"></script>
<!--Angular版本-->
<script src="~/iswitch-angular/1.0.0/dist/index.js"></script>
```

### 通过NPM安装
```bash
# 原生JS版本
npm i -S iswitch-js

# Vue版本
npm i -S iswitch-vue

# React版本
npm i -S iswitch-react

# Angular版本
npm i -S iswitch-angular
```