import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style.js";
import { IconFontGlobalStyle } from "./static/iconfont/iconfont";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

const Page = () => {
  return (
    <Provider store={store}>
      <IconFontGlobalStyle />
      <GlobalStyle />
      <App />
    </Provider>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
