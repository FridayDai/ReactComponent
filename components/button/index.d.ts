import * as React from 'react';
import './style/index.less';
interface ButtonProps {
    customizePrefixCls?: string;
    type?: string;
    size?: string;
    iconNode?: React.ReactNode | string;
    className?: string;
    href?: string;
    onClick?: React.MouseEventHandler<any>;
}
interface ButtonState {
}
declare class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps);
    handleClick: React.MouseEventHandler<any>;
    renderButton: () => JSX.Element;
    render(): JSX.Element;
}
export default Button;
