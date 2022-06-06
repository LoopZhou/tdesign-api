/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPopconfirmProps } from './type';
const props: TdPopconfirmProps = {
  /** 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件 */
  confirmBtn: {
    type: String,
    optionalTypes: [Object],
    value: '',
  },
  /** 确认框内容 */
  content: {
    type: String,
  },
  /** 是否在关闭浮层时销毁浮层 */
  destroyOnClose: {
    type: Boolean,
    value: true,
  },
  /** 透传 Popup 组件属性 */
  popupProps: {
    type: Object,
  },
  /** 文字提示风格 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 触发元素 */
  triggerElement: {
    type: String,
  },
};

export default props;
