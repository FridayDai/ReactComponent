import * as React from "react";
import * as ReactDOM from "react-dom";

import { message, Button, Icon, Select, Input, toast, Switch, Checkbox } from "./index";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'value': '',
            'checked': false,
            'checkbox': false
        };
    }

    render() {
        return(
            <div>
                <Checkbox labelMarginLeft={8} checked={this.state.checkbox} onChange={(e) => {
                    this.setState({'checkbox': e.target.checked});
                }}>
                    hahahaha
                </Checkbox>
                <Button onClick={() => {
                    message.error('error', 3);
                    toast.error('error');
                }}>error</Button>
                <div>
                    <Button
                        size='small'
                        type='danger'
                        onClick={() => console.log('defalut')}
                    >
                        default
                    </Button>
                    <Select mode='tags'>
                        <Select.Option value={'1'}>1</Select.Option>
                        <Select.Option value={'2'}>2</Select.Option>
                        <Select.Option value={'3'}>3</Select.Option>
                    </Select>
                </div>
                <div>
                    <Icon type='icon-blocked' spin={false} />
                    <Icon type='icon-checkmark' spin/>
                    <Icon type='icon-spell-check' spin={true} />
                </div>
                <div style={{ 'width': '50%' }}>
                    <Input
                        placeholder='this is a test'
                        value={this.state.value}
                        onChange={(e) => this.setState({ 'value': e.target.value })}
                        onPressEnter={(e) => console.log(e.currentTarget.value)}
                        allowClear={true}
                        spanBefore={<span>test</span>}
                        spanAfter={'.com'}
                        prefix={'icon-success'}
                        suffix={'icon-error'}
                    />
                </div>
                <div>
                    <Switch
                        checked={this.state.checked}
                        onChange={(checked) => this.setState({ 'checked': checked })}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById("container")
);
