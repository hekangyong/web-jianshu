import React from "react";

class Test extends React.Component {
  // 当父组件的render函数被运行时，他的子组件render都将被重新运行
  render() {
    return <div>{this.props.content}</div>;
  }
}

export default Test;
