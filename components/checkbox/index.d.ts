import * as React from 'react';
import './style/index.less';
interface CheckboxProps {
    customizePrefixCls?: string;
    className?: string;
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (e: MouseEvent) => void;
    id?: string;
    disabled?: boolean;
    onFocus?: (e: MouseEvent) => void;
    onBlur?: (e: MouseEvent) => void;
    onClick?: (e: MouseEvent) => void;
    readonlyProps?: boolean;
    children?: React.ReactNode;
    labelMarginLeft?: number;
}
export default class Checkbox extends React.Component<CheckboxProps, any> {
    private checkbox;
    private ts;
    constructor(props: any);
    getRef: (node: React.ReactNode) => void;
    emptyFunction: () => void;
    renderComponent: () => JSX.Element;
    render(): JSX.Element;
}
export {};
