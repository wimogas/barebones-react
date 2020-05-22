import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

import { Button, Block, Text } from "../components";

import { addLike, deletePost } from "../redux/actions/data.actions";

const PostItem = ({
  addLike,
  deletePost,
  auth,
  post: { _id, text, name, user, likes, date }
}) => (
  <Block card padding={"16px"} margin={"0px 0px 16px 0px"}>
    <Link to={`/posts/${_id}`}>
      <Text h4>{name}</Text>
      <Text light>
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </Text>
      <Block quote padding={"8px 8px"} margin={"8px 0px"}>
        <Text style={{ marginLeft: "16px" }}>{text}</Text>
      </Block>
    </Link>
    <Block row middle>
      <Button
        alert
        small
        onClick={() => {
          addLike(_id);
        }}
      >
        <FaHeart />
        {likes.length > 0 && (
          <Text white size={"12"} style={{ marginLeft: "8px" }}>
            {likes.length}
          </Text>
        )}
      </Button>
      {!auth.loading && user === auth.user._id && (
        <Button
          icon
          small
          onClick={() => deletePost(_id)}
          style={{ marginLeft: "16px" }}
        >
          <FaTrashAlt />
        </Button>
      )}
    </Block>
  </Block>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, deletePost })(
  PostItem
);
