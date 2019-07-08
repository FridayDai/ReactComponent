import * as React from 'react';
import Notification from 'rc-notification';
import classnames from 'classnames';
import './style/index.less';
// import Icon from "../icon";

let noticeInstance: any;
let key = 1;
let defaultPrefixCls = 'react-component-toast';

interface NoticeProps {
    prefixCls?: string,
    style?: object,
    getContainer?: HTMLElement
}
interface NoticeInstanceProps {
    type?: string,
    content?: React.ReactNode,
    key?: string,
    closable?: boolean,
    onClose?: () => void,
    duration?: number,
    style?: object,
    maxCount?: number,
    closeIcon?: React.ReactNode
}

const createNoticeInstance = (noticeProps: NoticeProps = {}, callback) => {
    if(noticeInstance) {
        callback(noticeInstance);
        return;
    }

    Notification.newInstance({
        ...noticeProps
    }, instance => {
        if(!noticeInstance) {
            noticeInstance = instance;
        }

        callback(noticeInstance);
    });
};

const open = (config: NoticeInstanceProps) => {
    const props: NoticeProps = {
        prefixCls: `${defaultPrefixCls}`,
        style: { 'right': '10px', 'bottom': '10px' },
    };

    const prefixCls = `${defaultPrefixCls}-container`;

    const cls = classnames(prefixCls, {
        [`${prefixCls}-${config.type}`]: config.type
    });

    createNoticeInstance(props, (instance) => {
        instance.notice({
            key: key++,
            content: (
                <div className={cls}>
                    <span>
                        {config.content}
                    </span>
                    {/* <Icon type='icon-heart-broken' /> */}
                </div>
            ),
            duration: config.duration,
            onClose: config.onClose,
            maxCount: config.maxCount,
            closeIcon: config.closeIcon,
            closable: config.closable
        });
    });
};

const destroy = () => {
    if(noticeInstance) {
        noticeInstance.destroy();
        noticeInstance = null;
    }
};

const toast = {
    'open': open,
    'destroy': destroy
};

['info', 'success', 'error', 'warn'].forEach((type) => {
    toast[type] = (
            content: React.ReactNode | string,
            duration: number = 3,
            closable: boolean = true,
            onClose: () => void = () => {},
            maxCount: number = 10
        ) => {
        return toast.open({ type, content, duration, closable, onClose, maxCount });
    }
});

export interface ToastApi {
    info(content: React.ReactNode | string, duration?: number, onClose?: () => void);
    success(content: React.ReactNode | string, duration?: number, onClose?: () => void);
    error(content: React.ReactNode | string, duration?: number, onClose?: () => void);
    warn(content: React.ReactNode | string, duration?: number, onClose?: () => void);
    destroy(): void;
    open(config: NoticeInstanceProps)
}

export default toast as ToastApi;
