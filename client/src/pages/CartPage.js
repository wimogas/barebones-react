import React from "react";
import { connect } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";

import { Text, Block, Button } from "../components";

const CartPage = ({ history }) => {
  return (
    <>
      <Block row middle space={"between"}>
        <Text h1>Cart</Text>
        <Block row justify={"flex-end"} flex={"0.2"} hide={"desktop"}>
          <Button circle onClick={() => history.push("/cart")}>
            <FaShoppingBasket />
          </Button>
        </Block>
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  data: state.data.data
});

export default connect(mapStateToProps)(CartPage);
