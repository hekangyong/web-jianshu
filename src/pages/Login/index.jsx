import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends React.PureComponent {
  render() {
    const { login, loginFunc } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button onClick={() => loginFunc(this.account, this.password)}>
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});
const mapDIsPatch = (dispatch) => ({
  loginFunc(account, password) {
    dispatch(actionCreators.login(account.value, password.value));
  },
});

export default connect(mapState, mapDIsPatch)(Login);
