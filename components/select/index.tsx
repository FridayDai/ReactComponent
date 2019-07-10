import * as React from 'react';
import RcSelect, { Option } from 'rc-select';
import './style/index.less';
import classnames from "classnames";

let defaultPrefixCls = 'react-component-select';

interface AbstractSelectProps {
    customizePrefixCls?: string,
    className?: string,
    showAction?: string[]; // actions trigger the dropdown to show
    transitionName?: string, // dropdown css animation name
    dropdownMatchSelectWidth?: boolean, // whether dropdown's width is same with select
    dropdownClassName?: string, // additional className applied to dropdown
    notFoundContent?: string, // specify content to show when no result matches.
    open?: boolean, // control select open
    defaultOpen?: boolean,
    placeholder?: string,
    showSearch?: boolean, // whether show search input in single mode
    showArrow?: boolean, // whether show arrow
    allowClear?: boolean, //
    tags?: boolean, // tag mode
    multiple?: boolean, // multiple mode
    disabled?: boolean,
    choiceTransitionName?: string; // css animation name for selected items at multiple mode
    defaultActiveFirstOption?: boolean; // whether active first option by default
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    onSearch?: (value: string) => any; // called when input changed
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement; // container which popup select menu rendered into
    filterOption?: boolean | ((inputValue: string, option: React.ReactElement<OptionProps>) => any);
    id?: string;
    onDropdownVisibleChange?: (open: boolean) => void;
    autoClearSearchValue?: boolean;
    dropdownRender?: (menu?: React.ReactNode) => React.ReactElement;
    loading?: boolean;
}

type SelectValue = string | number;

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

class Select<T = SelectValue> extends React.Component<SelectProps<T>, {}>{
    static Option = Option;
    protected rcSelect: any = null;

    constructor(props) {
        super(props);
    }

    getRef = (node: any) => {
        this.rcSelect = node;
    };

    renderSelect = () => {
        const {
            customizePrefixCls,
            className,
            mode,
            ...rest
        } = this.props;

        const prefixCls = customizePrefixCls ? customizePrefixCls : defaultPrefixCls;
        const cls = classnames(prefixCls, className);

        const modeConfig = {
            multiple: mode === 'multiple',
            tags: mode === 'tags'
        };

        return (
            <RcSelect
                ref={this.getRef}
                prefixCls={prefixCls}
                className={cls}
                {...rest}
                {...modeConfig}
            />
        );
    };

    render() {
        return (<React.Fragment>{this.renderSelect()}</React.Fragment>);
    }
}

export default Select;
