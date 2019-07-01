import * as React from 'react';
import classnames from 'classnames';
import './style/index.less';

let defaultPrefixCls:string = 'react-component-icon';

interface IconProps {
    customizePrefixCls?: string,
    type: string,
    className?: string,
    onClick?: (args:any) => void
}

class Icon extends React.Component<IconProps> {
    constructor(props: IconProps) {
        super(props);
    }

    handleClick(e) {
        if(this.props.onClick) {
            this.props.onClick(e);
        }
    }

    renderIcon() {
        const {
            type,
            className,
            customizePrefixCls,
            children,
            ...restProps
        } = this.props;

        const prefix = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const classes = classnames(prefix, type, className);

        return (
            <i
                className={classes}
                onClick={this.handleClick}
                {...restProps}
            >
                {children}
            </i>
        );
    }

    render() {
        return (<React.Fragment>{this.renderIcon()}</React.Fragment>);
    }
}

export default Icon;
