import React from "react";
import { connect } from "react-redux";

class Todolisthird extends React.Component {
  handleClick = () => {};

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li onClick={this.props.handleDeleteItem} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

// store.dispatch, props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue: e => {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      console.log(e.target.value);
      dispatch(action);
    },
    handleClick: () => {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    handleDeleteItem: () => {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolisthird);
