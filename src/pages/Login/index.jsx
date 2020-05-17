import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends React.PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" />
          <Input placeholder="密码" />
          <Button>Login</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = (state) => ({});
const mapDIsPatch = (dispatch) => ({});

export default connect(mapState, mapDIsPatch)(Login);
