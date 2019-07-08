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
const rc_switch_1 = __importDefault(require("rc-switch"));
const classnames_1 = __importDefault(require("classnames"));
require("./style/index.less");
let defaultPrefixCls = 'react-component-switch';
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.getSwitch = (node) => {
            this.switch = node;
        };
        this.renderSwitch = () => {
            const { customizePrefixCls, checked, className, onChange, onClick, disabled } = this.props;
            const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
            const cls = classnames_1.default(prefixCls, className);
            return (React.createElement(rc_switch_1.default, { ref: this.getSwitch, prefixCls: prefixCls, className: cls, onChange: onChange, onClick: onClick, checked: checked, disabled: disabled }));
        };
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderSwitch()));
    }
}
exports.default = Switch;
//# sourceMappingURL=index.js.map