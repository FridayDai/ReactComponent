import * as React from "react";
import * as ReactDOM from "react-dom";

import { message, Button, Icon, Select } from "./components/index";
const Option = Select.Option;

ReactDOM.render(
    <div>
        <Button disabled onClick={() => {
            message.error('error', 3);
        }}>error</Button>
        <Button onClick={() => {
            message.success('success', 3);
        }}>success</Button>
        <Button onClick={() => {
            message.info('info', 3);
        }}>info</Button>
        <Button onClick={() => {
            message.warn('warn', 3);
        }}>warn</Button>
        <div>
            <Button
                size='small'
                type='danger'
                onClick={() => console.log('defalut')}
            >
                default
            </Button>
            <Button
                size='large'
                onClick={() => console.log('defalut')}
            >
                large
            </Button>
            <Button
                type='primary'
                onClick={(e) => console.log(e)}
            >
                default
            </Button>
            <Button
                type='link'
                href='https://www.baidu.com'
            >
                link
            </Button>
            <Button>
                customize
            </Button>
        </div>
        <div>
            <Icon type='icon-blocked' spin={false} />
            <Icon type='icon-checkmark' spin/>
            <Icon type='icon-spell-check' spin={true} />
        </div>
        <div>
            <Select
                allowClear={true}
                style={{ 'width': '20%' }}
            >
                <Option value={'test1'}>test1</Option>
                <Option value={'test2'}>test2</Option>
                <Option value={'test3'}>test3</Option>
            </Select>
        </div>
    </div>,
    document.getElementById("container")
);
