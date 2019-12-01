import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchAlbumsFromDB } from "../actions/albums";
import AlbumsList from "../components/albums/AlbumsList";

const BrowseAlbums = ({ albums: { albums, loading }, fetchAlbumsFromDB }) => {
  useEffect(() => {
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
  albums: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { fetchAlbumsFromDB }
)(BrowseAlbums);
