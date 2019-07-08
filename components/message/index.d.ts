import * as React from "react";
import './style/index.less';
declare type configContent = React.ReactNode | string;
declare type voidFunction = () => void;
interface ArgsProps {
    content: configContent;
    duration?: number;
    onClose?: voidFunction;
    type: string;
}
export interface MessageApi {
    info(content: configContent, duration?: number, onClose?: voidFunction): any;
    success(content: configContent, duration?: number, onClose?: voidFunction): any;
    error(content: configContent, duration?: number, onClose?: voidFunction): any;
    warn(content: configContent, duration?: number, onClose?: voidFunction): any;
    destroy(): void;
    open(args: ArgsProps): any;
}
declare const _default: MessageApi;
export default _default;
