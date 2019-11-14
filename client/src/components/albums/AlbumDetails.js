import React from "react";
import { connect } from "react-redux";

const AlbumDetails = ({ search: { id } }) => {
  return <>{id}</>;
};

const mapStateToProps = state => ({
  search: state.search
});
export default connect(
  mapStateToProps,
  null
)(AlbumDetails);
