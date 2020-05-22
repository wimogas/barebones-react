import React from "react";

import styled from "styled-components";

import { Block, } from "../components";

const CustomBlock = styled.div`
  padding: ${props => props.theme.sizes.base}px;
  width: 200px;
  height: 270px;
  border-radius: ${props => props.theme.sizes.radius}px;
  margin-bottom: ${props => props.theme.sizes.base}px;
  background-image: ${props => props.theme.utils.placeholderGradient};
  background-size: 600px;
  animation: shine-item 2.0s infinite ease-out;
  @keyframes shine-item {
    0% {
      background-position: -100px;
    }
    40%, 100% {
      background-position: 200px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const ItemSkeleton = () => {

  return (
    <>
      <Block row wrap="true" space={"between"}>
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
        <CustomBlock />
      </Block>
    </>
  );
};

export default ItemSkeleton;
