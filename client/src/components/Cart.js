import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import { imageItems } from '../components/Images'

import {Text, Block, Button} from '../components'
import {getCart, deleteCart} from '../redux/actions/cart.actions'

const CustomImg = styled.img`
  width: 50px;
`        

const Cart = ({ cart, user, getCart, deleteCart }) => {
  const [total, setTotal] = useState(0)
  const [reducedCart, setReducedCart] = useState([])

  useEffect(() => {
    if(cart && cart.length > 0) {
      setTotal(cart.reduce(function(prev, cur) {
        return prev + cur.item.price;
      }, 0))
      cart.map(item => {
        const itemName = item.item.title
        const itemPrice = item.item.price
        const foundIndex = reducedCart.findIndex(i => i.item.title === itemName)
        if(foundIndex >= 0) {
          reducedCart[foundIndex].item.price += itemPrice
          reducedCart[foundIndex].quantity += 1
        } else {
          reducedCart.push(item)
        }
      })
    }
  }, [cart])

  useEffect(() => {
    getCart(user)
  }, [])

  return(
    <Block>
      <Text h1>Cart</Text>
      {cart && cart.length > 0 ? (
        <>
        {reducedCart && reducedCart.map((item, i) => (
          <Block card key={i} row middle space={"between"}>
            <Block middle row>
              <CustomImg src={imageItems[item.item.title.toLowerCase()]}/>
              <Text margin={"0px 0px 0px 10px"}>{item.item.title} ({item.quantity})</Text>
            </Block>
            <Text>{item.item.price / 100}€</Text>
          </Block>
        ))}
        {total > 0 && (
          <Block row space={"between"} margin={"32px 0px"}>
            <Text h2>Total</Text>
            <Text h2>{total / 100}€</Text>
          </Block>
        )}
         {cart && cart.length > 0 && (
            <Button primary full onClick={() => deleteCart()}>Process Order</Button>
         )}
       </>
      ) : (
        <Block row center margin={"32px 0px"}>
          <Text sad>Your Cart is Empty</Text>
        </Block>

      )}
        
      
    </Block>

  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  cart: state.cart.items,
})

export default connect(mapStateToProps, {getCart, deleteCart})(Cart);