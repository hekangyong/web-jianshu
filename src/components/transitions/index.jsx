import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Transitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    };
  }

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleAddItem = () => {
    this.setState(preState => {
      return {
        list: [...preState.list, "item"]
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            el.style.color = "blue";
          }}
          appear={true}
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
        <hr />
        <button onClick={this.handleAddItem}>add</button>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default Transitions;
