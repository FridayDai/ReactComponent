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
const icon_1 = __importDefault(require("../icon"));
const omit_js_1 = __importDefault(require("omit.js"));
require("./style/index.less");
let defaultPrefixCls = 'react-component-input';
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.renderInput = (prefixCls) => {
            const _a = this.props, { className, value } = _a, rest = __rest(_a, ["className", "value"]);
            const restProps = omit_js_1.default(rest, ['spanBefore', 'spanAfter', "allowClear", "prefix", "suffix", "onPressEnter", "children", "customizePrefixCls"]);
            const cls = classnames_1.default(prefixCls, className);
            return this.renderSuffixAndPrefix(prefixCls, React.createElement("input", Object.assign({ ref: this.getRef, className: cls, value: fixControlledValue(value), onChange: this.handleChange, onKeyDown: this.handleKeyDown }, restProps)));
        };
        this.handleKeyDown = (e) => {
            const { onPressEnter } = this.props;
            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
        };
        this.getRef = (node) => {
            this.input = node;
        };
        this.handleChange = (e) => {
            const { onChange } = this.props;
            this.setState({ 'value': e.target.value });
            if (onChange) {
                onChange(e);
            }
        };
        this.renderSuffixAndPrefix = (prefixCls, children) => {
            const { prefix, suffix } = this.props;
            if (!prefix && !suffix)
                return children;
            const prefixNode = prefix ?
                (React.createElement("span", { className: `${prefixCls}-prefix` },
                    React.createElement(icon_1.default, { type: prefix })))
                : null;
            const suffixNode = suffix ?
                (React.createElement("span", { className: `${prefixCls}-suffix` },
                    React.createElement(icon_1.default, { type: suffix })))
                : null;
            const wrapperPrefixCls = `${prefixCls}-icon-wrapper`;
            const cls = classnames_1.default(wrapperPrefixCls, {
                [`${wrapperPrefixCls}-hasPrefix`]: prefix,
                [`${wrapperPrefixCls}-hasSuffix`]: suffix
            });
            return (React.createElement("span", { className: cls },
                prefixNode,
                React.cloneElement(children),
                suffixNode));
        };
        this.renderComponent = () => {
            const { customizePrefixCls } = this.props;
            const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
            return this.renderSpanBeforeAndAfter(prefixCls, this.renderInput(prefixCls));
        };
        this.state = {
            'value': ''
        };
    }
    static getDerivedStateFromProps(nextProps) {
        const value = nextProps.value;
        return {
            value
        };
    }
    renderSpanBeforeAndAfter(prefixCls, children) {
        const { spanBefore, spanAfter } = this.props;
        if (!spanBefore && !spanAfter) {
            return children;
        }
        const spanBeforeNode = spanBefore ? React.createElement("span", { className: `${prefixCls}-before` }, spanBefore) : null;
        const spanAfterNode = spanAfter ? React.createElement("span", { className: `${prefixCls}-after` }, spanAfter) : null;
        return (React.createElement("span", { className: `${prefixCls}-span-wrapper` },
            spanBeforeNode,
            children,
            spanAfterNode));
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderComponent()));
    }
}
exports.default = Input;
//# sourceMappingURL=index.js.map