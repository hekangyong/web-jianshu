import React from "react";
import { DetailWrapper, Header, Content } from "./style";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Details extends React.PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDiapatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapState, mapDiapatch)(withRouter(Details));
