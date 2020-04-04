import React from "react";
import { Input, Button, List, Typography } from "antd";
// 定义无状态组件，当组件中没有任何的业务操作，建议使用无状态组件
const TodolistUI = props => {
  return (
    <div style={{ marginTop: 10, marginLeft: 10 }}>
      <Input
        onChange={props.handleOnChange}
        value={props.data.inputValue}
        placeholder="asdas"
        style={{ width: 300, marginRight: 10 }}
      />
      <Button type="primary" onClick={props.handleBtnClick}>
        提交
      </Button>
      <List
        style={{ marginTop: 10, width: 300 }}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.data.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodolistUI;
