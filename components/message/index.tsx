import * as React from "react";
import Notification from "rc-notification";
import './style/index.less';

let messageInstance: any;
let key: number = 0;
let prefixCls: string = 'react-component-message';

type configContent = React.ReactNode | string;
type voidFunction = () => void;

const api = {
    open: notice,
    destroy: () => {
        if(messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};

interface ArgsProps {
    content: configContent,
    duration?: number,
    onClose?: voidFunction,
    type: string
}

function getMessageInstance(callback) {
    if(messageInstance) {
        callback(messageInstance);
        return;
    }
    Notification.newInstance(
        {
            prefixCls: prefixCls,
            style: { top: '5px', left: '50%' }
        }, instance => {
        if(!messageInstance) {
            messageInstance = instance;
        }
        callback(messageInstance);
    });
}
function notice(args: ArgsProps) {
    const duration = args.duration !== undefined ? args.duration : 3;
    const type = args.type;
    const id = key++;

    getMessageInstance((instance) => {
        instance.notice({
            key: id,
            content: (
                <div className={`${prefixCls}-${type}`}>
                    <span>{args.content}</span>
                </div>
            ),
            duration,
            onClose: args.onClose
        });
    })
}

['info', 'success', 'error', 'warn'].forEach(type => {
    api[type] = (content: configContent, duration?: number, onClose?: voidFunction) => {
        return api.open({ content, duration, type, onClose });
    }
});

export interface MessageApi {
    info(content: configContent, duration?: number, onClose?: voidFunction);
    success(content: configContent, duration?: number, onClose?: voidFunction);
    error(content: configContent, duration?: number, onClose?: voidFunction);
    warn(content: configContent, duration?: number, onClose?: voidFunction);
    destroy(): void;
    open(args: ArgsProps);
}

export default api as MessageApi;
