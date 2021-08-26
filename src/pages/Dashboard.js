import { Route, Switch, useRouteMatch } from "react-router-dom";
import DashSideNavbar from "../components/DashSideNavbar";
import DashWelcome from "./Dashboard/DashWelcome";
import Learn from "./Dashboard/Learn";
import MakeSomething from "./Dashboard/MakeSomething";
import Practice from "./Dashboard/Practice";
import ChallengeSolvingBoard from "./Dashboard/Practice/ChallengeSolvingBoard";
import Page404 from "./Page404";

function Dashboard(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      {/* <DashSideNavbar /> */}
      <Switch>
        <Route exact path={`${path}`} component={DashWelcome} />
        <Route exact path={`${path}/learn`} component={Learn} />
        <Route exact path={`${path}/practice`} component={Practice} />
        <Route
          path={`${path}/practice/challenge/:taskID`}
          component={ChallengeSolvingBoard}
        />
        <Route
          path={`${path}/practice/ui-tasks/:taskID`}
          component={ChallengeSolvingBoard}
        />
        <Route exact path={`${path}/make`} component={MakeSomething} />
        <Route path={path} component={Page404} />
      </Switch>
    </div>
  );
}

export default Dashboard;
