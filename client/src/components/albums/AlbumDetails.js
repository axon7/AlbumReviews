import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addAlbum } from "../../actions/albums";

const AlbumDetails = ({
  search: { loading, singleAlbum },
  addAlbum,
  isAuthenticated
}) => {
  const [rating, setRating] = useState(1);

  if (loading) {
    return <p>LOADING</p>;
  }

  const ratingForm = (
    <div>
      <select onChange={e => setRating(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>{" "}
      <button type='submit' onClick={() => addAlbum(rating, singleAlbum)}>
        ADD RATING!
      </button>
    </div>
  );

  return (
    <div>
      <img src={singleAlbum.cover_big} alt={singleAlbum.title} />
      <p>{singleAlbum.title}</p>
      <p>{singleAlbum.artist.name}</p>
      {isAuthenticated ? ratingForm : "PLEASE LOG IN"}
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  isAuthenticated: state.authentication.isAuthenticated
});

AlbumDetails.propTypes = {
  search: PropTypes.object.isRequired,
  addAlbum: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { addAlbum }
)(AlbumDetails);
