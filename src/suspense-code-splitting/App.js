import React, { Component, Placeholder, lazy } from "react";
import { Container, Title } from "./ui";
import Loader from "../common/Loader";
import rocket from "../assets/rocket.gif";

const BigComponent = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => {
        return resolve(import("./BigComponent"));
      }, 2500)
    )
);

// const BigComponent = lazy(() => import("./BigComponent"));


export default class App extends Component {
  render() {
    return (
      <Container>
        <Title primary>Lazyyyyyyy loading</Title>
        <Placeholder
          delayMs={1000}
          fallback={<Loader type={rocket} height="256px" />}
        >
          <BigComponent />
        </Placeholder>
      </Container>
    );
  }
}
