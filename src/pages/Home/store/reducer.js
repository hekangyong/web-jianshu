import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topiclist: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topiclist: fromJS(action.todoList),
    articleList: fromJS(action.articlieList),
    recommendList: fromJS(action.remmondList),
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage,
  });
};

export default (state = defaultState, action) => {
  /**
   * immutable 对象的set 方法 ， 会结合之前immutable对象的值
   * 和设置的值，返回一个全新的对象
   */
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCORLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
