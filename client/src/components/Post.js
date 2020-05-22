import React, { useEffect } from "react";

import { connect } from "react-redux";

import { Spinner, BackButton } from "../components";
import PostItem from "../components/PostItem";

import { getPost } from "../redux/actions/data.actions";

const Post = ({ getPost, post: { post, loading }, match, history }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost,match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <BackButton history={history} />
      <PostItem post={post} showActions={false} />
    </>
  );
};

const mapStateToProps = state => ({
  post: state.data
});

export default connect(mapStateToProps, { getPost })(Post);
