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
- 支持`disabled`、`loading`、`readonly`、`static`状态
- 自定义设置`动画`、`尺寸`、`颜色`

# 实现进度
| 平台        | 包名             | 版本        | 备注        |
| ----------- | --------------- | ----------- | ----------- |
| ![image](https://img.shields.io/badge/-原生JS-f7e032.svg) | iswitch-js | | 实现中... |
| ![image](https://img.shields.io/badge/-Vue-41b883.svg) | iswitch-vue | | 实现中... |
| ![image](https://img.shields.io/badge/-React-61dafb.svg) | iswitch-react | | 实现中... |
| ![image](https://img.shields.io/badge/-Angular-dd1b16.svg) | iswitch-angular  | | 实现中... |

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

# 文档
## <iSwitch>组件

### Props
| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | --- | ----- |
| name | 组件内部`input[checkbox]`的`name`属性值 | string | |
| value | 组件值 | any | |
| size | 组件尺寸，可选值：`small` `default` `large` | string | default |
| loading | 组件是否进入`loading`状态 | boolean | false |
| loadingText | 组件进入`loading`状态时，显示的`loading`文字 | string | Loading... |
| disabled | 组件是否禁用 | boolean | false |
| readonly | 组件是否只读 | boolean | false |
| static | 组件以静态方式渲染 | boolean | false |
| delay | 滑动动画delay时间，单位毫秒 | number | 300 |
| beforeChange | 开关切换前执行的函数，可返回一个`Promise`对象，或者返回一个`boolean`类型的值；当返回值是`true`或者返回的`Promise`resolve时，才会执行切换，否则不执行切换 | function | |
| onText | 打开状态下显示的文字 | string |  |
| onValue | 打开状态对应的值 | any | true |
| onColor | 打开状态开关颜色 | string | #64bd63 |
| offText | 关闭状态下显示的文字 | string |  |
| offValue | 关闭状态对应的值 | any | false |
| offColor | 关闭状态开关颜色 | string | #fdfdfd |

### Methods
switchOn,switchOff,switchToggle,destroy

### Events
change,input