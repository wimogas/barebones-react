import React from "react";
import { connect } from "react-redux";

const Single = () => {

  return (
    <>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, )(Single);
