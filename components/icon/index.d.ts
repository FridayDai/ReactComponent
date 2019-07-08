import * as React from 'react';
import './style/index.less';
interface IconProps {
    customizePrefixCls?: string;
    type: string;
    className?: string;
    spin?: boolean;
    onClick?: (args: any) => void;
}
declare class Icon extends React.Component<IconProps> {
    constructor(props: IconProps);
    handleClick(e: any): void;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
export default Icon;
