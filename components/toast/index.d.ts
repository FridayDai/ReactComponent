import * as React from 'react';
import './style/index.less';
interface NoticeInstanceProps {
    type?: string;
    content?: React.ReactNode;
    key?: string;
    closable?: boolean;
    onClose?: () => void;
    duration?: number;
    style?: object;
    maxCount?: number;
    closeIcon?: React.ReactNode;
}
export interface ToastApi {
    info(content: React.ReactNode | string, duration?: number, onClose?: () => void): any;
    success(content: React.ReactNode | string, duration?: number, onClose?: () => void): any;
    error(content: React.ReactNode | string, duration?: number, onClose?: () => void): any;
    warn(content: React.ReactNode | string, duration?: number, onClose?: () => void): any;
    destroy(): void;
    open(config: NoticeInstanceProps): any;
}
declare const _default: ToastApi;
export default _default;
