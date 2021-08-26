import { Route, Switch, useRouteMatch } from "react-router-dom";
import DashSideNavbar from "../components/DashSideNavbar";
import DashWelcome from "./Dashboard/DashWelcome";
import Learn from "./Dashboard/Learn";
import MakeSomething from "./Dashboard/MakeSomething";
import Practice from "./Dashboard/Practice";
import Page404 from "./Page404";

function Dashboard(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <DashSideNavbar /> */}
      <Switch>
        <Route exact path={`${url}`} component={DashWelcome} />
        <Route exact path={`${url}/learn`} component={Learn} />
        <Route exact path={`${url}/practice`} component={Practice} />
        <Route exact path={`${url}/make`} component={MakeSomething} />
        <Route path={url} component={Page404} />
      </Switch>
    </div>
  );
}

export default Dashboard;
