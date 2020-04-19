import React from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import imgSrc from "../../static/6171276-3304c2681c7b7995.webp";
import Topic from "./components/Topic";
import Recommends from "./components/Recommends";
import List from "./components/List";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends React.Component {
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
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
});

export default connect(null, mapDispatch)(Home);
