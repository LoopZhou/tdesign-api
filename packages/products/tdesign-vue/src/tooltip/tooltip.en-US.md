:: BASE_DOC ::

## API
### Tooltip Props

name | type | default | description | required
-- | -- | -- | -- | --
delay | Number | - | \- | N
destroyOnClose | Boolean | true | \- | N
duration | Number | - | \- | N
placement | String | top | Typescript：`'mouse' | PopupPlacement`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts) | N
showArrow | Boolean | true | \- | N
theme | String | default | options：default/primary/success/danger/warning/light | N
`Omit<PopupProps, 'placement'>` | \- | - | \- | N

### TooltipLite Props

name | type | default | description | required
-- | -- | -- | -- | --
color | String | - | background color | N
content | String / Slot / Function | - | tip content。Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
delay | Number / Array | - | [250, 150]。Typescript：`number | Array<number>` | N
placement | String | top | options：top/bottom | N
showArrow | Boolean | true | \- | N
theme | String | dark | options：light/dark | N
trigger | String | hover | options：hover/click/focus | N
triggerElement | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onVisibleChange | Function |  | Typescript：`(visible: boolean, context: TooltipVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts)。<br/>`interface TooltipVisibleChangeContext { e?: TooltipTriggerEvent; trigger?: TooltipTriggerSource }`<br/><br/>`type TooltipTriggerEvent = MouseEvent | FocusEvent`<br/><br/>`type TooltipTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus'`<br/> | N

### TooltipLite Events

name | params | description
-- | -- | --
visible-change | `(visible: boolean, context: TooltipVisibleChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts)。<br/>`interface TooltipVisibleChangeContext { e?: TooltipTriggerEvent; trigger?: TooltipTriggerSource }`<br/><br/>`type TooltipTriggerEvent = MouseEvent | FocusEvent`<br/><br/>`type TooltipTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus'`<br/>