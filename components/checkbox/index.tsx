import * as React from 'react';
import RcCheckbox from 'rc-checkbox';
import classnames from 'classnames';
import './style/index.less';

let defaultPrefixCls: string = 'react-component-checkbox';

interface CheckboxProps {
    customizePrefixCls?: string,
    className?: string,
    name?: string,
    checked?: boolean,
    defaultChecked?: boolean,
    onChange?: (e: MouseEvent) => void,
    id?: string,
    disabled?: boolean,
    onFocus?: (e: MouseEvent) => void
    onBlur?: (e: MouseEvent) => void
    onClick?: (e: MouseEvent) => void
    readonlyProps?: boolean,
    children?: React.ReactNode,
    labelMarginLeft?: number
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
    private checkbox: React.ReactNode;
    private ts: string = new Date().getTime().toString();

    constructor(props) {
        super(props);

    }

    getRef = (node: React.ReactNode) => {
        this.checkbox = node;
    };

    emptyFunction = () => {};

    renderComponent = () => {
        let {
            customizePrefixCls,
            className,
            name,
            checked,
            defaultChecked,
            onChange,
            id,
            disabled,
            onFocus,
            onClick,
            onBlur,
            readonlyProps,
            children,
            labelMarginLeft
        } = this.props;

        id = id || this.ts;
        name = name || '';
        defaultChecked = defaultChecked || false;
        checked = checked || false;
        disabled = disabled || false;
        onChange = onChange || this.emptyFunction;
        onFocus = onFocus || this.emptyFunction;
        onBlur = onBlur || this.emptyFunction;
        onClick = onClick || this.emptyFunction;
        readonlyProps = readonlyProps || false;

        const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const cls = classnames(prefixCls, className);

        return (
            <span>
                <RcCheckbox
                    ref={this.getRef}
                    name={name}
                    prefixCls={prefixCls}
                    className={cls}
                    checked={checked}
                    style={{}}
                    id={id}
                    type='checkbox'
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    tabIndex={0}
                    readOnly={readonlyProps}
                    autoFocus={false}
                    value={checked}
                    onChange={onChange}
                />
                <label htmlFor={id} style={{ 'marginLeft': `${labelMarginLeft}px` }}>
                    {children}
                </label>
            </span>
        );
    };

    render () {
        return (<React.Fragment>{this.renderComponent()}</React.Fragment>);
    }
}
