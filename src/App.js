import React from "react";
import GlobalStyle from "./constants/globalStyle";
import Footer from "./components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { HomePage, ModePage, ChatPage } from "./pages"

export default function App() {
  return (
    <HashRouter>
      <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/mode" component={ModePage}/>
          <Route path="/chat" component={ChatPage}/>
        </Switch>
      <Footer />
    </HashRouter>
  );
}