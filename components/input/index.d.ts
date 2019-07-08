import * as React from 'react';
import './style/index.less';
interface InputProps {
    customizePrefixCls?: string;
    className?: string;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    allowClear?: boolean;
    spanBefore?: React.ReactNode;
    spanAfter?: React.ReactNode;
    prefix?: string;
    onPrefixClick?: (value: string) => void;
    suffix?: string;
    onSuffixClick?: (value: string) => void;
    value: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export default class Input extends React.Component<InputProps, any> {
    private input;
    constructor(props: InputProps);
    static getDerivedStateFromProps<T>(nextProps: InputProps): {
        value: string;
    };
    renderInput: (prefixCls: string) => JSX.Element;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    getRef: (node: React.ReactNode) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    renderSuffixAndPrefix: (prefixCls: string, children: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => JSX.Element;
    renderSpanBeforeAndAfter(prefixCls: string, children: React.ReactElement<any>): JSX.Element;
    renderComponent: () => JSX.Element;
    render(): JSX.Element;
}
export {};
