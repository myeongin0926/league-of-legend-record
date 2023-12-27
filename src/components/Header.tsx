import React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
  height: 150px;
  border: 1px solid black;
`;

const Header: React.FC = () => {
  return <StyleHeader>hello</StyleHeader>;
};

export default Header;
