import React, { Component, Suspense, lazy } from "react";
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

export default class LazyLoadingApp extends Component {
  render() {
    return (
      <Container>
        <Title primary>Lazyyyyyyy loading</Title>
        <Suspense
          maxDuration={500}
          fallback={<Loader type={rocket} height="256px" />}
        >
          <BigComponent />
        </Suspense>
      </Container>
    );
  }
}
