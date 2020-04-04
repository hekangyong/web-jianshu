import * as actionTypes from "./actionType";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/header.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = page => ({
  type: actionTypes.CHNAGE_PAGE,
  page
});

const changeList = data => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
