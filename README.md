# ReactComponent-dy
This is my customize react component based on typescript(闲来无事，造些轮子)

## Usage
用法与antd类似
```
npm i --save react-component-dy

import * as React from "react";
import * as ReactDOM from "react-dom";

import { message, Button, Icon, Select, Input, Switch } from "react-component-dy";

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
                    <Button
                        type='link'
                        href='https://www.baidu.com'
                    >
                        link
                    </Button>
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

```

## ReadMe
react16 + typescript + less

目前支持的组件： message、Button、Icon、Select、Input、toast
