import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: "衡水中学，被外地占领的高考工厂",
  content:
    '<img src="https://i.pinimg.com/564x/8b/9d/88/8b9d881dc39cef5f9b39756085a0e0cb.jpg" alt="" /><p><b>第一，真正伟大的力量，在于团结</b></p><p>胜利的黎明前总有沉重的至暗时刻。1941年，远东战场上，中国大片国土沦丧；太平洋战场上，美国海军在珍珠港遭到重创；欧洲战场上，德军兵临莫斯科；北非战场上，德意联军的装甲铁骑让英军节节败退……法西斯势力的猖獗，肆无忌惮地挑战着人类文明的底线。</p><p>胜利的黎明前总有沉重的至暗时刻。1941年，远东战场上，中国大片国土沦丧；太平洋战场上，美国海军在珍珠港遭到重创；欧洲战场上，德军兵临莫斯科；北非战场上，德意联军的装甲铁骑让英军节节败退……法西斯势力的猖獗，肆无忌惮地挑战着人类文明的底线。</p><p>胜利的黎明前总有沉重的至暗时刻。1941年，远东战场上，中国大片国土沦丧；太平洋战场上，美国海军在珍珠港遭到重创；欧洲战场上，德军兵临莫斯科；北非战场上，德意联军的装甲铁骑让英军节节败退……法西斯势力的猖獗，肆无忌惮地挑战着人类文明的底线。</p><p>胜利的黎明前总有沉重的至暗时刻。1941年，远东战场上，中国大片国土沦丧；太平洋战场上，美国海军在珍珠港遭到重创；欧洲战场上，德军兵临莫斯科；北非战场上，德意联军的装甲铁骑让英军节节败退……法西斯势力的猖獗，肆无忌惮地挑战着人类文明的底线。</p>',
});

export default (state = defaultState, action) => {
  /**
   * immutable 对象的set 方法 ， 会结合之前immutable对象的值
   * 和设置的值，返回一个全新的对象
   */
  switch (action.type) {
    default:
      return state;
  }
};
