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
const rc_select_1 = __importStar(require("rc-select"));
require("./style/index.less");
const classnames_1 = __importDefault(require("classnames"));
let defaultPrefixCls = 'react-component-select';
class Select extends React.Component {
    constructor(props) {
        super(props);
        this.rcSelect = null;
        this.getRef = (node) => {
            this.rcSelect = node;
        };
        this.renderSelect = () => {
            const _a = this.props, { customizePrefixCls, className, mode } = _a, rest = __rest(_a, ["customizePrefixCls", "className", "mode"]);
            const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
            const cls = classnames_1.default(prefixCls, className);
            const modeConfig = {
                multiple: mode === 'multiple',
                tags: mode === 'tags'
            };
            return (React.createElement(rc_select_1.default, Object.assign({ ref: this.getRef, prefixCls: prefixCls, className: cls }, rest, modeConfig)));
        };
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderSelect()));
    }
}
Select.Option = rc_select_1.Option;
exports.default = Select;
//# sourceMappingURL=index.js.map