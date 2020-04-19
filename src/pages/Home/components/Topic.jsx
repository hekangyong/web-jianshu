import React from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopciItem } from "../style";
// import imgs from "../../../static/1202579-b6e17367e11cdc3b.jpg";
class Topic extends React.Component {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {topicList.map((item) => {
          return (
            <TopciItem key={item.get("id")}>
              <img className="topic-pic" src={item.get("imgUrl")} alt="img" />
              {item.get("title")}
            </TopciItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  topicList: state.getIn(["home", "topiclist"]),
});
export default connect(mapState)(Topic);
