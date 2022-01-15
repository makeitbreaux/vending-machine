import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import SparklingWater from "./SparklingWater";
import Popcorn from "./Popcorn";
import Cookie from "./Cookie";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/cookie" exact>
          <Cookie />
        </Route>
        <Route path="/popcorn" exact>
          <Popcorn />
        </Route>
        <Route path="/sparklingWater" exact>
          <SparklingWater />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
