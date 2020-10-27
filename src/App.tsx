import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CVViewer from "./pages/cv/CVViewer";
import Home from "./pages/home/Home";
import { rocketAscii } from "./shared/constants/misc.const";

export default function App() {
  useEffect(() => console.log(rocketAscii), []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cv" component={CVViewer}/>
      </Switch>
    </BrowserRouter>
  );
}
