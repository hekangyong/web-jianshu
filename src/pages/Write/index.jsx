import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends React.PureComponent {
  render() {
    const { login } = this.props;
    if (login) {
      return <div>写文章界面</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});

export default connect(mapState)(Write);
