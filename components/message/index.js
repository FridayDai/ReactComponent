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
require("./style/index.less");
let messageInstance;
let key = 0;
let prefixCls = 'react-component-message';
const api = {
    open: notice,
    destroy: () => {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    rc_notification_1.default.newInstance({
        prefixCls: prefixCls,
        style: { top: '5px', left: '50%' }
    }, instance => {
        if (!messageInstance) {
            messageInstance = instance;
        }
        callback(messageInstance);
    });
}
function notice(args) {
    const duration = args.duration !== undefined ? args.duration : 3;
    const type = args.type;
    const id = key++;
    getMessageInstance((instance) => {
        instance.notice({
            key: id,
            content: (React.createElement("div", { className: `${prefixCls}-${type}` },
                React.createElement("span", null, args.content))),
            duration,
            onClose: args.onClose
        });
    });
}
['info', 'success', 'error', 'warn'].forEach(type => {
    api[type] = (content, duration, onClose) => {
        return api.open({ content, duration, type, onClose });
    };
});
exports.default = api;
//# sourceMappingURL=index.js.map