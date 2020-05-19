import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Detail from "./pages/Details/loadable";
import Login from "./pages/Login";
import Write from "./pages/Write";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
