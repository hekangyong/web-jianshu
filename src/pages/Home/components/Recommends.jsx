import React from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommends extends React.Component {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {recommendList.map((item) => {
          return (
            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  recommendList: state.getIn(["home", "recommendList"]),
});

export default connect(mapState)(Recommends);
