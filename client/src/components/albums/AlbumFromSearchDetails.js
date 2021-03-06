import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addAlbum,
  fetchAlbumsFromDB,
  addReviewToExistingAlbum
} from "../../actions/albums";

const AlbumFromSeachDetails = ({
  search: { loading, singleAlbum, id },
  addAlbum,
  fetchAlbumsFromDB,
  addReviewToExistingAlbum,
  isAuthenticated,
  user,
  albums: { albums }
}) => {
  const [rating, setRating] = useState(1);
  const [text, setText] = useState("");

  let ide;
  if (user) {
    ide = user._id;
  }

  const review = {
    user: ide,
    text,
    rating
  };
  if (loading) {
    return <p>LOADING</p>;
  }

  const checkForExistingReview = async () => {
    const filteredAlbum = await albums.filter(item => {
      return item.id === id;
    });
    console.log(filteredAlbum);
    if (filteredAlbum.length >= 1) {
      await filteredAlbum[0].reviews.map(item => {
        if (item.user === user._id) {
          console.log("ALBUM JUŻ ISTNIEJE, i nie mozna dopisac");
        } else {
          const albumWithAnotherReview = [...filteredAlbum];
          albumWithAnotherReview[0].reviews.push(review);
          addReviewToExistingAlbum(albumWithAnotherReview[0]);
        }
      });
    } else {
      console.log("nieznaleziono");
      await addAlbum(review, singleAlbum);
      await fetchAlbumsFromDB();
    }
  };

  const createOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  };

  const ratingForm = (
    <div>
      <select onChange={e => setRating(e.target.value)}>
        {createOptions()}}
      </select>
      <textarea
        rows='5'
        placeholder='Type text here'
        cols='50'
        onChange={e => setText(e.target.value)}
      />
    </div>
  );

  return (
    <div>
      <img src={singleAlbum.cover_big} alt={singleAlbum.title} />
      <p>{singleAlbum.title}</p>
      <p>{singleAlbum.artist.name}</p>
      {isAuthenticated ? (
        ratingForm
      ) : (
        <Link to='/login'>Login to add review</Link>
      )}

      <button onClick={() => checkForExistingReview()}>ADD ALBUM</button>
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  isAuthenticated: state.authentication.isAuthenticated,
  albums: state.albums,
  user: state.authentication.user
});

AlbumFromSeachDetails.propTypes = {
  search: PropTypes.object.isRequired,
  addAlbum: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  albums: PropTypes.object.isRequired,
  dbitems: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { addAlbum, fetchAlbumsFromDB, addReviewToExistingAlbum }
)(AlbumFromSeachDetails);
