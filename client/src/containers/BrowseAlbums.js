import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchAlbumsFromDB } from "../actions/albums";
import AlbumsList from "../components/albums/AlbumsList";

const BrowseAlbums = ({ albums: { albums, loading }, fetchAlbumsFromDB }) => {
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    // console.log("effect working");
    // console.log(albums);
    fetchAlbumsFromDB();
  }, []);
  return (
    <div>
      {loading && !albums ? "LOADING..." : <AlbumsList data={albums} dbitems />}
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  albums: state.albums
});

BrowseAlbums.propTypes = {
  fetchAlbumsFromDB: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  { fetchAlbumsFromDB }
)(BrowseAlbums);
