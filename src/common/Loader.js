import React from "react";
import { Center } from "./ui";

const Loader = ({ type, height = "100%" }) => (
  <Center>
    <img src={type} height={height} />
  </Center>
);

export default Loader;
