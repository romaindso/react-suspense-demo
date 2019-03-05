import React, { Component, Fragment, Suspense } from "react";
import LazyLoadingApp from "../suspense-code-splitting/App";
// import AppImages from "../suspense-images/App";
import TodoListApp from "../suspense-data/App";
import { Nav, NavLink } from "./ui";

export default class App extends Component {
  state = {
    page: "todolist"
  };

  goTo(page) {
    this.setState({ page });
  }

  isActive(page) {
    return this.state.page === page;
  }

  render() {
    const { page } = this.state;
    let appToRender;
    if (page === "lazy-loading") {
      appToRender = <LazyLoadingApp />;
    } else if (page === "todolist") {
      appToRender = <TodoListApp />;
    } else {
      appToRender = <AppImages />;
    }

    return (
      <Fragment>
        <Nav>
          <NavLink
            isActive={this.isActive("images")}
            onClick={() => this.goTo("images")}
          >
            Images
          </NavLink>
          <NavLink
            isActive={this.isActive("todolist")}
            onClick={() => this.goTo("todolist")}
          >
            TodoList
          </NavLink>
          <NavLink
            isActive={this.isActive("lazy-loading")}
            onClick={() => this.goTo("lazy-loading")}
          >
            Lazy Loading
          </NavLink>
        </Nav>
        {appToRender}
      </Fragment>
    );
  }
}
