import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import { connectWithSocketIOServer } from "./utils/wss";

import "./App.css";
import JoinClient from "./JoinClient/JoinClient";

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Router>
      <Switch>
      <Route exact path="/join/:id/:name/:host/:callBack">
          <JoinClient />
        </Route>
        <Route path="/join-room">
          <JoinRoomPage />
        </Route>
        <Route path="/room">
          <RoomPage />
        </Route>
        <Route path="/">
          <IntroductionPage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
