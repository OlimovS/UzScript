import { Route, Switch } from "react-router-dom";
import TopNavbar from "./components/TopNav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Signup from "./pages/Signup";

export default function App(props) {
  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Page404} />
      </Switch>
    </div>
  );
}
