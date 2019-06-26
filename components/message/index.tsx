import * as React from "react";
import Notification from "rc-notification";

// Notification.newInstance({
//     prefixCls: customPrefixCls,
//     style: {
//         top: 0,
//         left: '50%'
//     },
//     getContainer:
// }, notification => {
//     notification.notice({
//         content: 'content'
//     });
// });

const open = () => {
    Notification.newInstance({}, (notification:any) => {
        notification.notice({
            content: 'content'
        });
    });
};

export default open;
