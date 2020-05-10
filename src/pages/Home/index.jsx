import React from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import imgSrc from "../../static/6171276-3304c2681c7b7995.webp";
import Topic from "./components/Topic";
import Recommends from "./components/Recommends";
import List from "./components/List";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends React.PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

    render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={imgSrc} alt="img" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommends />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
