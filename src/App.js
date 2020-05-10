import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Detail from "./pages/Details";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
