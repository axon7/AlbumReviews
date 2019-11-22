import React, { useState } from "react";
import { connect } from "react-redux";
import { addAlbum } from "../../actions/albums";
const AlbumDetails = ({ search: { loading, singleAlbum }, addAlbum }) => {
  const [rating, setRating] = useState(1);

  if (loading) {
    return <p>"LOADING"</p>;
  }
  return (
    <div>
      <img src={singleAlbum.cover_big} alt={singleAlbum.title} />
      <p>{singleAlbum.title}</p>
      <p>{singleAlbum.artist.name}</p>
      <select onChange={e => setRating(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>{" "}
      <button onClick={() => addAlbum(rating, singleAlbum)}>ADD RATING!</button>
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search
});
export default connect(
  mapStateToProps,
  { addAlbum }
)(AlbumDetails);
