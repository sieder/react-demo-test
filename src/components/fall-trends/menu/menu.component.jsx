import React from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const FallMenu = () => {
    function callback(key) {
    console.log(key);
    }
    const { TabPane } = Tabs;
    return (
        <Tabs defaultActiveKey="1" onChange={callback} className="menuContainer">
            <TabPane tab="PRODUCTS" key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane tab="IMAGES" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="TEXT" key="3">
            Content of Tab Pane 3
            </TabPane>
            <TabPane tab="SETTING" key="4">
            Content of Tab Pane 4
            </TabPane>
        </Tabs>
    )
}

export default FallMenu