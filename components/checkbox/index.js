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
const rc_checkbox_1 = __importDefault(require("rc-checkbox"));
const classnames_1 = __importDefault(require("classnames"));
require("./style/index.less");
let defaultPrefixCls = 'react-component-checkbox';
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.ts = new Date().getTime().toString();
        this.getRef = (node) => {
            this.checkbox = node;
        };
        this.emptyFunction = () => { };
        this.renderComponent = () => {
            let { customizePrefixCls, className, name, checked, defaultChecked, onChange, id, disabled, onFocus, onClick, onBlur, readonlyProps, children, labelMarginLeft } = this.props;
            id = id || this.ts;
            name = name || '';
            defaultChecked = defaultChecked || false;
            checked = checked || false;
            disabled = disabled || false;
            onChange = onChange || this.emptyFunction;
            onFocus = onFocus || this.emptyFunction;
            onBlur = onBlur || this.emptyFunction;
            onClick = onClick || this.emptyFunction;
            readonlyProps = readonlyProps || false;
            const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
            const cls = classnames_1.default(prefixCls, className);
            return (React.createElement("span", null,
                React.createElement(rc_checkbox_1.default, { ref: this.getRef, name: name, prefixCls: prefixCls, className: cls, checked: checked, style: {}, id: id, type: 'checkbox', defaultChecked: defaultChecked, disabled: disabled, onFocus: onFocus, onBlur: onBlur, onClick: onClick, tabIndex: 0, readOnly: readonlyProps, autoFocus: false, value: checked, onChange: onChange }),
                React.createElement("label", { htmlFor: id, style: { 'marginLeft': `${labelMarginLeft}px` } }, children)));
        };
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderComponent()));
    }
}
exports.default = Checkbox;
//# sourceMappingURL=index.js.map