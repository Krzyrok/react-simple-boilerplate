import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore.js";

const store = configureStore();

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <div>test</div>
            </Provider>
        );
    }
}

export default Root;
