import React, { useState } from "react";
import GlobalStyle from "./constants/globalStyle";
import Footer from "./components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { HomePage, ModePage, ChatPage } from "./pages";
import { AuthContext } from "./contexts";

export default function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar: "",
  });

  return (
    <AuthContext.Provider value={{ isUserLogin, setIsUserLogin, currentUser, setCurrentUser }}>
      <HashRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/mode" component={ModePage} />
          <Route path="/chat/:roomId" component={ChatPage} />
        </Switch>
        <Footer />
      </HashRouter>
    </AuthContext.Provider>
  );
}
