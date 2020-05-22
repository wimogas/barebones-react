import React, { useState } from "react";
import { connect } from "react-redux";

import { FormContainer, Input, Text, Button, Block} from "../components";

import { addItem } from "../redux/actions/data.actions";

const AddItem = ({ addItem }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
  return (
    <>
    <Text h1>Add Item to Store</Text>
    <Block>
    <FormContainer
        onSubmit={e => {
            console.log('submitting...')
            e.preventDefault();
            addItem({ title, price, quantity });
        }}
      >
        <Input
          name="title"
          type="text"
          placeholder="Item Title"
          value={title}
          handleChange={e => setTitle(e.target.value)}
        />
         <Input
          name="price"
            type="number"
          placeholder="Item Price"
          value={price}
          handleChange={e => setPrice(e.target.value)}
        />
         <Input
          name="quantity"
          type="number"
          placeholder="Item Quantity"
          value={quantity}
          handleChange={e => setQuantity(e.target.value)}
        />
        <Button primary type="submit">Add Item</Button>
      </FormContainer>
    </Block>
      
    </>
  );
};

export default connect(null, { addItem })(AddItem);
