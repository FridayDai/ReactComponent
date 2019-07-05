import * as React from "react";
import * as ReactDOM from "react-dom";

import { message, Button, Icon, Select, Input, toast } from "./components/index";
const Option = Select.Option;

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'value': ''
        };
    }

    render() {
        return(
            <div>
                <Button onClick={() => {
                    // message.error('error', 3);
                    const msg = ['info', 'success', 'test', 'hahahaha'];
                    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

                    const index = random(0,3);
                    toast.error(msg[index]);
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
                        allowClear={false}
                        spanBefore={<span>test</span>}
                        spanAfter={'.com'}
                        prefix={'icon-success'}
                        suffix={'icon-error'}
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
