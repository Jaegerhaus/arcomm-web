import React from "react";
import { Provider } from "react-redux";

import DependencyContainer from "./dependency-container";

class App extends React.Component {

  render() {
    const {
      store,
      router,
      services,
    } = this.props;
    return (
      <Provider store={store}>
        <DependencyContainer services={services}>
          {router}
        </DependencyContainer>
      </Provider>
    );
  }
}

export default App;
