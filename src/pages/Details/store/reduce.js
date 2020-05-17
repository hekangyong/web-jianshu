import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: "",
  content: "",
});

export default (state = defaultState, action) => {
  /**
   * immutable 对象的set 方法 ， 会结合之前immutable对象的值
   * 和设置的值，返回一个全新的对象
   */
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};
