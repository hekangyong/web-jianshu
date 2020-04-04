import React from "react";
import store from "../../store/index";
import {
  getIputChangeAction,
  getAddItemAciton,
  getdeleteItemAction,
  // initListAcion
  // getTodoList
  getInitList
} from "../../store/actionCreators";
import TodolistUI from "./TodolistUI";
import axios from "axios";

class TodolistSec extends React.Component {
  constructor(props) {
    super(props);
    // store.getState() 获取到store中返回的数据
    this.state = store.getState();
    console.log(this.state);
    store.subscribe(this.handleStoreOnChange);
  }

  componentDidMount() {
    const  action = getInitList()
    store.dispatch(action)
    console.log(action)
   
  }

  handleOnChange = e => {
    // 创建action并传给store
    const action = getIputChangeAction(e.target.value);
    // 将创建好的action传递给store
    store.dispatch(action);
  };

  handleStoreOnChange = () => {
    this.setState(store.getState());
  };

  handleBtnClick = () => {
    const action = getAddItemAciton();
    store.dispatch(action);
  };

  handleItemDelete = index => {
    console.log("asd");
    const action = getdeleteItemAction(index);
    store.dispatch(action);
  };

  render() {
    return (
      <TodolistUI
        data={this.state}
        handleOnChange={this.handleOnChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

export default TodolistSec;
