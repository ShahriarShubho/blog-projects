import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import ManageBlog from "./ManageBlog/ManageBlog";
import AddBlog from "./AddBolg/AddBlog";
import "./Admin.css";

const Admin = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/addBlog`}>Add Blog</Link>
        </li>
        <li>
          <Link to={`${url}/manageBlog`}>Manage Blog</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <ManageBlog />
        </Route>
        <Route path={`${path}/manageBlog`}>
          <ManageBlog />
        </Route>
        <Route path={`${path}/addBlog`}>
          <AddBlog />
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
