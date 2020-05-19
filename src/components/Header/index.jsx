import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/Login/store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { Link } from "react-router-dom";

class Header extends React.Component {
  getListArea = () => {
    const {
      list,
      focused,
      mouseIn,
      page,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
      totalPage,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (jsList[i]) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe606;{" "}
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      logout,
      login,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe624;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe615;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFoucs());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
