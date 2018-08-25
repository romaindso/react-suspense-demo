import React, { Component } from 'react';
import styled from 'styled-components';
import { Center } from './ui';
import chocolatine from '../chocolatine.gif';

const Loader = () => (
  <Center>
    <img src={chocolatine} />
  </Center>
);

export default Loader;