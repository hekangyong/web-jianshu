import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    const { handleItemClick, index } = this.props;
    handleItemClick(index);
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false; 
    }
  }
  render() {
    const { content } = this.props;
    // JSX -> creatElemnt -> 虚拟DOM（JS对象） -> 真实的DOM
    return <span onClick={this.handleClick}>{content}</span>;
  }
}

// 定义props传过来的数据类型
// PropTypes.arrayOf(PropTypes.number, PropTypes.string) arrayOf 是一种或者的语法 表示可以接受number或者string的数据类型
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), //oneOfType 可以接受数组中所定义的数据类型
  handleItemClick: PropTypes.func,
  index: PropTypes.number
};

// 定义默认值
TodoItem.defaultProps = {
  content: "Hello world"
};

export default TodoItem;
