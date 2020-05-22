import React from "react";

import { Block, Text, Button} from "../components";

const CustomPostSkeleton = () => (
    <Block card padding={"16px"} margin={"0px 0px 16px 0px"}>
        <Text placeholder={"150px"} style={{marginBottom: "16px"}}></Text>
        <Text placeholder={"250px"} style={{marginBottom: "16px"}}></Text>
        <Text placeholder={"210px"} style={{marginBottom: "32px"}}></Text>
        <Block row middle>
            <Button placeholder={"true"}></Button>
            <Button placeholder={"true"} style={{marginLeft: "16px"}}></Button>
        </Block>
    </Block>
)

const PostSkeleton = () => {

  return (
    <>
    <CustomPostSkeleton/>
    <CustomPostSkeleton/>
    <CustomPostSkeleton/>
    <CustomPostSkeleton/>
    </>
  );
};

export default PostSkeleton;
