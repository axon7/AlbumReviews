import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AlbumDetails = ({ search: { loading }, albums: { selectedAlbum } }) => {
  if (loading) {
    return <p>LOADING</p>;
  }
  const newarr = [...selectedAlbum.reviews];
  const totalRating = newarr.reduce(function(acc, currentValue) {
    return acc + Number(currentValue.rating);
  }, 0);
  console.log(totalRating);
  console.log(newarr);

  return (
    <div>
      <img src={selectedAlbum.cover_big} alt={selectedAlbum.title} />
      <p>{selectedAlbum.title}</p>
      {selectedAlbum.reviews.map((item, i) => {
        return (
          <div>
            <p>Review: {item.text} </p>
            <p>Rating: {item.rating}</p>
            <p>Author: {item.user}</p>
          </div>
        );
      })}
      <p>Average:{totalRating / selectedAlbum.reviews.length}</p>
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
