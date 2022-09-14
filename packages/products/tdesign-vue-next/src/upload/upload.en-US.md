:: BASE_DOC ::

## API
### Upload Props

name | type | default | description | required
-- | -- | -- | -- | --
accept | String | - | \- | N
action | String | - | upload action url | N
allowUploadDuplicateFile | Boolean | false | \- | N
autoUpload | Boolean | true | \- | N
beforeAllFilesUpload | Function | - | before all files upload, return false can stop upload continue。Typescript：`(file: UploadFile[]) => boolean | Promise<boolean>` | N
beforeUpload | Function | - | Typescript：`(file: UploadFile) => boolean | Promise<boolean>` | N
data | Object | - | Typescript：`Record<string, any> | ((file: File) => Record<string, any>)` | N
default | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
disabled | Boolean | false | \- | N
dragContent | String / Slot / Function | - | drag content。Typescript：`TNode<TriggerContext>`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
draggable | Boolean | undefined | \- | N
fileListDisplay | Slot / Function | - | Typescript：`TNode<{ displayFiles: UploadFile[] }>`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
files | Array | [] | `v-model` and `v-model:files` is supported。Typescript：`Array<UploadFile>` | N
defaultFiles | Array | [] | uncontrolled property。Typescript：`Array<UploadFile>` | N
format | Function | - | Typescript：`(file: File) => UploadFile` | N
formatRequest | Function | - | Typescript：`(requestData: { [key: string]: any }) => { [key: string]: any }` | N
formatResponse | Function | - | Typescript：`(response: any, context: FormatResponseContext) => ResponseType ` `type ResponseType = { error?: string; url?: string } & Record<string, any>` `interface FormatResponseContext { file: UploadFile; currentFiles?: UploadFile[] }`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
headers | Object | - | Typescript：`{[key: string]: string}` | N
isBatchUpload | Boolean | false | \- | N
locale | Object | - | Typescript：`UploadConfig` `import { UploadConfig } from '../config-provider/type'`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
max | Number | 0 | \- | N
method | String | POST | options：POST/GET/PUT/OPTION/PATCH/post/get/put/option/patch | N
multiple | Boolean | false | \- | N
name | String | file | \- | N
placeholder | String | - | \- | N
requestMethod | Function | - | Typescript：`(files: UploadFile | UploadFile[]) => Promise<RequestMethodResponse>` `interface RequestMethodResponse { status: 'success' | 'fail'; error?: string; response: { url?: string; [key: string]: any } }`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
showUploadProgress | Boolean | true | \- | N
sizeLimit | Number / Object | - | Typescript：`number | SizeLimitObj` `interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }` `type SizeUnitArray = ['B', 'KB', 'MB', 'GB']` `type SizeUnit = SizeUnitArray[number]`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
theme | String | file | options：custom/file/file-input/file-flow/image/image-flow | N
tips | String | - | \- | N
trigger | Slot / Function | - | Typescript：`TNode<TriggerContext>` `interface TriggerContext { dragActive?: boolean;  displayFiles: UploadFile[] }`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
triggerButtonProps | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts) | N
uploadAllFilesInOneRequest | Boolean | false | \- | N
useMockProgress | Boolean | true | \- | N
withCredentials | Boolean | false | \- | N
onCancelUpload | Function |  | Typescript：`() => void`<br/> | N
onChange | Function |  | Typescript：`(value: Array<UploadFile>, context: UploadChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadChangeContext { e?: MouseEvent | ProgressEvent; response?: any; trigger: string; index?: number; file?: UploadFile }`<br/> | N
onDragenter | Function |  | Typescript：`(context: { e: DragEvent }) => void`<br/> | N
onDragleave | Function |  | Typescript：`(context: { e: DragEvent }) => void`<br/> | N
onDrop | Function |  | Typescript：`(context: { e: DragEvent }) => void`<br/> | N
onFail | Function |  | Typescript：`(options: UploadFailContext) => void`<br/>`response.error` used for error tips, `formatResponse` can format `response`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadFailContext { e: ProgressEvent; failedFiles: UploadFile[]; currentFiles: UploadFile[]; response?: any; file: UploadFile }`<br/> | N
onOneFileFail | Function |  | Typescript：`(options: UploadFailContext) => void`<br/>trigger on one file upload failed | N
onOneFileSuccess | Function |  | Typescript：`(context: Pick<SuccessContext, 'e' | 'file' | 'response'>) => void`<br/> | N
onPreview | Function |  | Typescript：`(options: { file: UploadFile; index: number; e: MouseEvent }) => void`<br/> | N
onProgress | Function |  | Typescript：`(options: ProgressContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface ProgressContext { e?: ProgressEvent; file?: UploadFile; currentFiles: UploadFile[]; percent: number; type: UploadProgressType }`<br/><br/>`type UploadProgressType = 'real' | 'mock'`<br/> | N
onRemove | Function |  | Typescript：`(context: UploadRemoveContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadRemoveContext { index?: number; file?: UploadFile; e: MouseEvent }`<br/> | N
onSelectChange | Function |  | Typescript：`(files: File[], context: UploadSelectChangeContext) => void`<br/>trigger after file choose and before upload。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadSelectChangeContext { currentSelectedFiles: UploadFile[] }`<br/> | N
onSuccess | Function |  | Typescript：`(context: SuccessContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface SuccessContext { e?: ProgressEvent; file?: UploadFile; fileList?: UploadFile[]; currentFiles?: UploadFile[]; response?: any; results?: SuccessContext[] }`<br/> | N
onValidate | Function |  | Typescript：`(context: { type: UploadValidateType, files: UploadFile[] }) => void`<br/>trigger on length over limit, or trigger on file size over limit。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`type UploadValidateType = 'FILE_OVER_SIZE_LIMIT' | 'FILES_OVER_LENGTH_LIMIT' | 'FILTER_FILE_SAME_NAME'`<br/> | N
onWaitingUploadFilesChange | Function |  | Typescript：`(context: { files: Array<UploadFile>, trigger: 'validate' | 'remove' | 'uploaded' }) => void`<br/>trigger on waiting upload files changed | N

### Upload Events

name | params | description
-- | -- | --
cancel-upload | \- | \-
change | `(value: Array<UploadFile>, context: UploadChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadChangeContext { e?: MouseEvent | ProgressEvent; response?: any; trigger: string; index?: number; file?: UploadFile }`<br/>
dragenter | `(context: { e: DragEvent })` | \-
dragleave | `(context: { e: DragEvent })` | \-
drop | `(context: { e: DragEvent })` | \-
fail | `(options: UploadFailContext)` | `response.error` used for error tips, `formatResponse` can format `response`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadFailContext { e: ProgressEvent; failedFiles: UploadFile[]; currentFiles: UploadFile[]; response?: any; file: UploadFile }`<br/>
one-file-fail | `(options: UploadFailContext)` | trigger on one file upload failed
one-file-success | `(context: Pick<SuccessContext, 'e' | 'file' | 'response'>)` | \-
preview | `(options: { file: UploadFile; index: number; e: MouseEvent })` | \-
progress | `(options: ProgressContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface ProgressContext { e?: ProgressEvent; file?: UploadFile; currentFiles: UploadFile[]; percent: number; type: UploadProgressType }`<br/><br/>`type UploadProgressType = 'real' | 'mock'`<br/>
remove | `(context: UploadRemoveContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadRemoveContext { index?: number; file?: UploadFile; e: MouseEvent }`<br/>
select-change | `(files: File[], context: UploadSelectChangeContext)` | trigger after file choose and before upload。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface UploadSelectChangeContext { currentSelectedFiles: UploadFile[] }`<br/>
success | `(context: SuccessContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`interface SuccessContext { e?: ProgressEvent; file?: UploadFile; fileList?: UploadFile[]; currentFiles?: UploadFile[]; response?: any; results?: SuccessContext[] }`<br/>
validate | `(context: { type: UploadValidateType, files: UploadFile[] })` | trigger on length over limit, or trigger on file size over limit。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/upload/type.ts)。<br/>`type UploadValidateType = 'FILE_OVER_SIZE_LIMIT' | 'FILES_OVER_LENGTH_LIMIT' | 'FILTER_FILE_SAME_NAME'`<br/>
waiting-upload-files-change | `(context: { files: Array<UploadFile>, trigger: 'validate' | 'remove' | 'uploaded' })` | trigger on waiting upload files changed

### UploadInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
triggerUpload | \- | \- | required。trigger system file select
uploadFiles | `(files?: UploadFile[])` | \- | required。upload all files which status are not success

### UploadFile

name | type | default | description | required
-- | -- | -- | -- | --
lastModified | Number | - | \- | N
name | String | - | \- | N
percent | Number | - | \- | N
raw | Object | - | Typescript：`File` | N
response | Object | - | Typescript：`{ [key: string]: any }` | N
size | Number | - | \- | N
status | String | - | Typescript：` 'success' | 'fail' | 'progress' | 'waiting'` | N
type | String | - | \- | N
uploadTime | String | - | upload time | N
url | String | - | \- | N