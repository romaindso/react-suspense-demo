import React, { Component } from "react";
import styled from "styled-components";
import { Center } from "./ui";

const Loader = ({ type }) => (
  <Center>
    <img src={type} />
  </Center>
);

export default Loader;
