import * as React from 'react';
import classnames from 'classnames';
import Icon from "../icon";
import omit from "omit.js";
import './style/index.less';

let defaultPrefixCls = 'react-component-input';

interface InputProps {
    customizePrefixCls?: string;
    className?: string;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    allowClear?: boolean;
    spanBefore?: React.ReactNode;
    spanAfter?: React.ReactNode;
    prefix?: string;
    onPrefixClick?: (value: string) => void,
    suffix?: string;
    onSuffixClick?: (value: string) => void,
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

export default class Input extends React.Component<InputProps, any> {
    private input: React.ReactNode;

    constructor(props: InputProps) {
        super(props);

        this.state = {
            'value': ''
        };
    }

    static getDerivedStateFromProps<T>(nextProps: InputProps) {
        const value = nextProps.value;
        return {
            value
        };
    }

    renderInput = (prefixCls: string) => {
        const {
            className,
            value,
            ...rest
        } = this.props;

        const restProps = omit(rest, ['spanBefore', 'spanAfter', "allowClear", "prefix", "suffix", "onPressEnter", "children", "customizePrefixCls"]);

        const cls = classnames(prefixCls, className);

        return this.renderSuffixAndPrefix(prefixCls,
                    <input
                        ref={this.getRef}
                        className={cls}
                        value={fixControlledValue(value)}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        {...restProps}
                    />
                );
    };

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { onPressEnter } = this.props;
        if (e.keyCode === 13 && onPressEnter) {
            onPressEnter(e);
        }
    };

    getRef = (node: React.ReactNode) => {
        this.input = node;
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange } = this.props;
        this.setState({ 'value': e.target.value });
        if(onChange) {
            onChange(e);
        }
    };

    renderSuffixAndPrefix = (prefixCls: string, children: React.ReactElement<any>) => {
        const { prefix, suffix, allowClear } = this.props;

        const prefixNode = prefix ?
            (<span className={`${prefixCls}-prefix`}>
                <Icon
                    onClick={() => {
                        const { onSuffixClick } = this.props;
                        const { value } = this.state;
                        if(onSuffixClick) {
                            onSuffixClick(value);
                        }
                    }}
                    type={prefix}
                />
            </span>)
            : null;
        const suffixNode = (suffix || allowClear) ?
            (<span className={`${prefixCls}-suffix`}>
                <Icon
                    className={allowClear ? `${prefixCls}-suffix-clear` : ''}
                    type={allowClear ? 'icon-cross' : suffix}
                    onClick={(e) => {
                        const { onPrefixClick, onChange } = this.props;
                        const { value } = this.state;
                        if(allowClear) {
                            this.setState({ 'value': '' });
                            if(onChange) onChange(e);
                        } else {
                            if(onPrefixClick) onPrefixClick(value);
                        }
                    }}
                />
            </span>)
            : null;

        const wrapperPrefixCls = `${prefixCls}-icon-wrapper`;
        const cls = classnames(wrapperPrefixCls, {
            [`${wrapperPrefixCls}-hasPrefix`]: prefix,
            [`${wrapperPrefixCls}-hasSuffix`]: suffix
        });

        return (
            <span className={cls}>
                {prefixNode}
                {React.cloneElement(children)}
                {suffixNode}
            </span>
        );
    };

    renderSpanBeforeAndAfter(prefixCls: string, children: React.ReactElement<any>) {
        const { spanBefore, spanAfter } = this.props;

        if(!spanBefore && !spanAfter) {
            return children;
        }

        const spanBeforeNode = spanBefore ? <span className={`${prefixCls}-before`}>{spanBefore}</span> : null;
        const spanAfterNode = spanAfter ? <span className={`${prefixCls}-after`}>{spanAfter}</span> : null;
        return (
            <span className={`${prefixCls}-span-wrapper`}>
                {spanBeforeNode}
                {children}
                {spanAfterNode}
            </span>
        );
    }

    renderComponent = () => {
        const { customizePrefixCls } = this.props;
        const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;

        return this.renderSpanBeforeAndAfter(prefixCls, this.renderInput(prefixCls));
    };

    render() {
        return(<React.Fragment>{this.renderComponent()}</React.Fragment>);
    }
}
