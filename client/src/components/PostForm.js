import React, { useState } from "react";
import { connect } from "react-redux";

import { FormContainer, Input } from "../components";

import { addPost } from "../redux/actions/data.actions";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <>
      <FormContainer
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <Input
          name="text"
          cols="30"
          rows="5"
          placeholder="Add a comment"
          value={text}
          handleChange={e => setText(e.target.value)}
        />
      </FormContainer>

    </>
  );
};

export default connect(null, { addPost })(PostForm);
