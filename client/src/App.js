import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>HELLO WORLD</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
