import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"}>
          <div>sdfsdf</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
