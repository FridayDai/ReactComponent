import * as React from 'react';
import { Option } from 'rc-select';
import './style/index.less';
interface AbstractSelectProps {
    customizePrefixCls?: string;
    className?: string;
    showAction?: string[];
    transitionName?: string;
    dropdownMatchSelectWidth?: boolean;
    dropdownClassName?: string;
    notFoundContent?: string;
    open?: boolean;
    defaultOpen?: boolean;
    placeholder?: string;
    showSearch?: boolean;
    showArrow?: boolean;
    allowClear?: boolean;
    tags?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    choiceTransitionName?: string;
    defaultActiveFirstOption?: boolean;
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    onSearch?: (value: string) => any;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    filterOption?: boolean | ((inputValue: string, option: React.ReactElement<OptionProps>) => any);
    id?: string;
    onDropdownVisibleChange?: (open: boolean) => void;
    autoClearSearchValue?: boolean;
    dropdownRender?: (menu?: React.ReactNode) => React.ReactElement;
    loading?: boolean;
}
declare type SelectValue = string | number;
interface SelectProps<T = SelectValue> extends AbstractSelectProps {
    value?: T;
    defaultValue?: T;
    mode?: 'default' | 'multiple' | 'tags' | string;
    optionLabelProp?: string;
    firstActiveValue?: string | string[];
    onChange?: (value: T, option: React.ReactElement<any> | React.ReactElement<any>[]) => void;
    onSelect?: (value: T, option: React.ReactElement<any>) => any;
    onDeselect?: (value: T) => any;
    onBlur?: (value: T) => void;
    onFocus?: () => void;
    onPopupScroll?: React.UIEventHandler<HTMLDivElement>;
    onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => any;
    onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => any;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: React.ReactNode | ((omittedValues: T[]) => React.ReactNode);
    optionFilterProp?: string;
    labelInValue?: boolean;
    tokenSeparators?: string[];
    getInputElement?: () => React.ReactElement<any>;
    autoFocus?: boolean;
    suffixIcon?: React.ReactNode;
    removeIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
    menuItemSelectedIcon?: React.ReactNode;
}
interface OptionProps {
    className?: string;
    disabled?: boolean;
    key?: string | number;
    value?: string | number;
    title?: string;
    children?: React.ReactNode;
}
declare class Select<T = SelectValue> extends React.Component<SelectProps<T>, {}> {
    static Option: typeof Option;
    protected rcSelect: any;
    constructor(props: any);
    getRef: (node: any) => void;
    renderSelect: () => JSX.Element;
    render(): JSX.Element;
}
export default Select;
