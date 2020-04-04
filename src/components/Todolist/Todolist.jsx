import React from "react";
import "./style.css";
import TodoItem from "./component/TodoItem";
import Test from "../Test";
import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // 当组件state或者props发生改变的时候，render函数会重新执行
    this.state = {
      inputValue: "",
      list: []
    };
  }

  componentDidMount() {
    // 发起axios请求
    axios
      .get("api/todolist")
      .then(res => {
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch(() => {
        alert("error");
      });
  }

  handleInputChange = () => {
    const values = this.input.value;
    this.setState(() => ({
      inputValue: values
    }));
  };

  handleBtnClick = () => {
    const { inputValue, list } = this.state;
    if (inputValue === "") return;
    this.setState(
      () => ({
        list: [...list, inputValue]
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  };

  delete = () => {
    this.setState(() => ({
      list: [],
      inputValue: ""
    }));
  };

  handledelete = index => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState(() => ({ list }));
  };

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={item}>
          <TodoItem
            content={item}
            index={index}
            handleItemClick={this.handledelete}
          />
        </div>
      );
    });
  }

  render() {
    // console.log("render");
    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input
            type="text"
            id="insertArea"
            className="input"
            value={inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
          <button onClick={this.delete}>清空数据</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </React.Fragment>
    );
  }
}

export default TodoList;
