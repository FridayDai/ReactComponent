"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const classnames_1 = __importDefault(require("classnames"));
require("./style/index.less");
let defaultPrefixCls = 'react-component-icon';
class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
    renderIcon() {
        const _a = this.props, { type, className, customizePrefixCls, children } = _a, restProps = __rest(_a, ["type", "className", "customizePrefixCls", "children"]);
        const prefix = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const classes = classnames_1.default(prefix, type, className);
        return (React.createElement("i", Object.assign({ className: classes, onClick: this.handleClick }, restProps), children));
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderIcon()));
    }
}
exports.default = Icon;
//# sourceMappingURL=index.js.map