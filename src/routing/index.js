import React from "react";
import { Provider } from "react-redux";
import { store } from "store";
import routes from "./routes";

const Root = ({store}) => {
  return (
    <Provider store = {store}>
      {routes}
    </Provider>
  );
};

export default (<Root store = {store} />);
