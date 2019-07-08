import * as React from 'react';
import RcSwitch from 'rc-switch';
import classnames from 'classnames';
import './style/index.less';

let defaultPrefixCls = 'react-component-switch';

interface SwitchProps {
    customizePrefixCls?: string,
    checked?: boolean,
    className?: string,
    onChange?: (checked: boolean, event: MouseEvent) => void,
    onClick?: (checked: boolean, event: MouseEvent) => void,
    disabled?: boolean
}

export default class Switch extends React.Component<SwitchProps, any> {
    private switch: React.ReactNode;

    constructor(props) {
        super(props);
    }

    getSwitch = (node: React.ReactNode) => {
        this.switch = node;
    };

    renderSwitch = () => {
        const {
            customizePrefixCls,
            checked,
            className,
            onChange,
            onClick,
            disabled
        } = this.props;

        const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const cls = classnames(prefixCls, className);

        return (
            <RcSwitch
                ref={this.getSwitch}
                prefixCls={prefixCls}
                className={cls}
                onChange={onChange}
                onClick={onClick}
                checked={checked}
                disabled={disabled}
            />
        );
    };

    render() {
        return (<React.Fragment>{this.renderSwitch()}</React.Fragment>);
    }
}
