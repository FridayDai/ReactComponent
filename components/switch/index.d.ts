import * as React from 'react';
import './style/index.less';
interface SwitchProps {
    customizePrefixCls?: string;
    checked?: boolean;
    className?: string;
    onChange?: (checked: boolean, event: MouseEvent) => void;
    onClick?: (checked: boolean, event: MouseEvent) => void;
    disabled?: boolean;
}
export default class Switch extends React.Component<SwitchProps, any> {
    private switch;
    constructor(props: any);
    getSwitch: (node: React.ReactNode) => void;
    renderSwitch: () => JSX.Element;
    render(): JSX.Element;
}
export {};
