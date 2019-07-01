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
let defaultPrefixCls = 'react-component-button';
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = (e) => {
            const { onClick } = this.props;
            if (onClick) {
                onClick(e);
            }
        };
        this.renderButton = () => {
            const _a = this.props, { customizePrefixCls, type, // 'primary' 'danger' 'link'
            href, className, size, // 'small' 'large'
            iconNode, children } = _a, rest = __rest(_a, ["customizePrefixCls", "type", "href", "className", "size", "iconNode", "children"]);
            const icon = typeof iconNode === 'string' ? React.createElement("i", { className: iconNode }) : iconNode;
            const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
            const classname = classnames_1.default(prefixCls, className, {
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${size}`]: size
            });
            if (type === 'link') {
                return (React.createElement("a", Object.assign({ href: href, className: classname }, rest),
                    icon,
                    children));
            }
            return (React.createElement("button", Object.assign({ className: classname }, rest, { onClick: this.handleClick }),
                icon,
                children));
        };
    }
    render() {
        return React.createElement(React.Fragment, null, this.renderButton());
    }
}
exports.default = Button;
//# sourceMappingURL=index.js.map