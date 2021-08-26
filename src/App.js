import { Route, Switch } from "react-router-dom";
import TopNavbar from "./components/TopNav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Signup from "./pages/Signup";
import TestPage from "./pages/TestPage";

import "./App.css";

export default function App(props) {
  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test-page" component={TestPage} />
        <Route path="/" component={Page404} />
      </Switch>
    </div>
  );
}
