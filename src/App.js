import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import './App.css';
import Icon from "./component/Icon";
import {Keyword, Constant, String} from "./component/Colors";

const Logo = styled.img`
  margin-left: 10px;
`;

const LeftPad = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  padding: 10px;
`;

const Header = styled.header`
  margin-bottom: 10px;
`;

const Link = styled.a`
    margin-right: 20px;
`;

const Copyright = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: #808080;
`;

const HostBy = styled.h3`
  margin-left: 50px;
  padding: 0 10px;
  margin-bottom: 0;
`;

const Title = styled.h1`
  margin-left: 50px;
  padding: 0 10px;
  margin-top: 0;
`;

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Header>
        <Logo src={logo} alt="Pair Programming with Me"/>
      </Header>
      <div>
        <LeftPad>watch <Keyword>short</Keyword> videos with <Constant>intense</Constant> coding about common
          problems based on <String>"real world"</String> scenarios;</LeftPad>
        <HostBy><small>host by</small></HostBy>
        <Title>David SG</Title>
        <LeftPad>david@pairprogrammingwith.me</LeftPad>
        <LeftPad>
          <h2>
            <Link href="https://www.youtube.com/channel/UCIseyoNPNvBKUv37RPuzw1w" target="_blank">
              <Icon group="fab" name="youtube"/>
            </Link>
            <Link href="https://github.com/PairingWithMe" target="_blank">
              <Icon group="fab" name="github"/>
            </Link>
            <Link href="https://medium.com/PairingWithMe" target="_blank">
              <Icon group="fab" name="medium"/>
            </Link>
            <Link href="https://twitter.com/PairingWithMe" target="_blank">
              <Icon group="fab" name="twitter"/>
            </Link>
            <Link href="https://instagram.com/PairingWithMe" target="_blank">
              <Icon group="fab" name="instagram" />
            </Link>
          </h2>
        </LeftPad>
      </div>
      <Copyright>/* Copyright © {year} Pair Programming with Me. All rights reserved. */</Copyright>
    </div>
  );
}

export default App;
