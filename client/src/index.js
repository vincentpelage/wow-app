import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./containers/App";
// import DungeonAchievements from "./views/DungeonAchievements";
// import registerServiceWorker from './registerServiceWorker';

// const toto = () => <div>Toto</div>;
// const tata = () => <div>Tata</div>;
// const Test = () => {
//   return (
//     <div>
//       <Route path="/toto" component={toto} />
//       <Route path="/tata" component={tata} />
//     </div>
//   );
// };

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
