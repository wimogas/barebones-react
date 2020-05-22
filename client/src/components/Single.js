import React, {useEffect} from "react";
import { connect } from "react-redux";
import styled from 'styled-components'

import { imageItems } from '../components/Images'

import { Text, Block, Button, BackButton } from "../components";
import { getItem } from "../redux/actions/data.actions";
import { addToCart } from "../redux/actions/cart.actions";

const CustomImg = styled.img`
  width: 400px;
  border-radius: 22px;
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`

const Single = ({ getItem, addToCart, history, match, data, cart, user }) => {

  useEffect(() => {
    getItem(match.params.itemId)
  },[getItem,match.params.itemId])

  return (
    <>
      <BackButton history={history} />
      <Block row center margin={"0px 0px 16px 0px"}>
        {data && data.item && <CustomImg src={imageItems[data.item.title.toLowerCase()]}/>}
      </Block>
      <Text h1>{data && data.item && data.item.title}</Text>
      <Text h1>{data && data.item && data.item.price / 100}€</Text>
      <Block padding={"20px 0px"}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum, ante ac pharetra bibendum, enim augue hendrerit mi, rhoncus congue metus lorem at nibh. Morbi aliquet, ex vel commodo dictum, nunc libero commodo massa, quis mattis nunc velit a nulla. Vivamus vestibulum eu tortor nec consectetur. Proin eget aliquam risus. Aliquam euismod urna pretium, tincidunt mauris vitae, pretium ligula. Curabitur blandit sapien et porta cursus. Phasellus ultrices semper tellus, quis elementum metus bibendum vitae.</Text>
      </Block>

      <Button full primary action={"true"} onClick={() => addToCart(user._id, data.item)}>
       Add to Cart
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  data: state.data,
});

export default connect(mapStateToProps, { getItem, addToCart})(Single);
