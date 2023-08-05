import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "../components/protectedRoute";
import NotFound from "../components/notFound";
import NoteForm from "../components/noteForm";
import Notes from "../components/notes";
const Router = () => {
  return (
    <React.Fragment>
      <Switch>
        {/* <Route path="/register" component={RegisterForm} /> */}
        {/* <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} /> */}

        <ProtectedRoute path={"/notes/new"} component={NoteForm} />

        {/* <ProtectedRoute path="/notes/:id" component={MovieForm} /> */}

        <Route path="/notes" component={Notes} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
