import * as React from 'react';
import classnames from 'classnames';
import './style/index.less';

let defaultPrefixCls = 'react-component-button';

interface ButtonProps {
    customizePrefixCls?: string;
    type?: string,
    size?: string,
    iconNode?: React.ReactNode | string,
    className?: string,
    href?:string,
    onClick?: React.MouseEventHandler<any>;
}

interface ButtonState {

}

class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }

    handleClick: React.MouseEventHandler<any> = (e) => {
        const { onClick } = this.props;
        if(onClick) {
            onClick(e);
        }
    };

    renderButton = () => {
        const {
            customizePrefixCls,
            type, // 'primary' 'danger' 'link'
            href,
            className,
            size, // 'small' 'large'
            iconNode,
            children,
            ...rest
        } = this.props;

        const icon = typeof iconNode === 'string' ? <i className={iconNode} /> : iconNode;

        const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const classname = classnames(prefixCls, className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${size}`]: size
        });
        if(type === 'link') {
            return (
                <a
                    href={href}
                    className={classname}
                    {...rest}
                >
                    {icon}
                    {children}
                </a>
            );
        }

        return (
            <button
                className={classname}
                {...rest}
                onClick={this.handleClick}
            >
                {icon}
                {children}
            </button>
        );
    };

    render() {
        return <React.Fragment>{this.renderButton()}</React.Fragment>;
    }
}

export default Button;
