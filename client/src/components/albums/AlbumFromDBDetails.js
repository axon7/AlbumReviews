import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AlbumDetails = ({ search: { loading }, albums: { selectedAlbum } }) => {
  if (loading) {
    return <p>LOADING</p>;
  }

  return (
    <div>
      <img src={selectedAlbum[0].cover_big} alt={selectedAlbum[0].title} />
      <p>{selectedAlbum[0].title}</p>
      {selectedAlbum[0].rating}
      {selectedAlbum[0].text}
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  isAuthenticated: state.authentication.isAuthenticated,
  albums: state.albums
});

AlbumDetails.propTypes = {
  search: PropTypes.object.isRequired,

  albums: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AlbumDetails);
