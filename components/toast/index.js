"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const rc_notification_1 = __importDefault(require("rc-notification"));
const classnames_1 = __importDefault(require("classnames"));
require("./style/index.less");
// import Icon from "../icon";
let noticeInstance;
let key = 1;
let defaultPrefixCls = 'react-component-toast';
const createNoticeInstance = (noticeProps = {}, callback) => {
    if (noticeInstance) {
        callback(noticeInstance);
        return;
    }
    rc_notification_1.default.newInstance(Object.assign({}, noticeProps), instance => {
        if (!noticeInstance) {
            noticeInstance = instance;
        }
        callback(noticeInstance);
    });
};
const open = (config) => {
    const props = {
        prefixCls: `${defaultPrefixCls}`,
        style: { 'right': '10px', 'bottom': '10px' },
    };
    const prefixCls = `${defaultPrefixCls}-container`;
    const cls = classnames_1.default(prefixCls, {
        [`${prefixCls}-${config.type}`]: config.type
    });
    createNoticeInstance(props, (instance) => {
        instance.notice({
            key: key++,
            content: (React.createElement("div", { className: cls },
                React.createElement("span", null, config.content))),
            duration: config.duration,
            onClose: config.onClose,
            maxCount: config.maxCount,
            closeIcon: config.closeIcon,
            closable: config.closable
        });
    });
};
const destroy = () => {
    if (noticeInstance) {
        noticeInstance.destroy();
        noticeInstance = null;
    }
};
const toast = {
    'open': open,
    'destroy': destroy
};
['info', 'success', 'error', 'warn'].forEach((type) => {
    toast[type] = (content, duration = 3, closable = true, onClose = () => { }, maxCount = 10) => {
        return toast.open({ type, content, duration, closable, onClose, maxCount });
    };
});
exports.default = toast;
//# sourceMappingURL=index.js.map