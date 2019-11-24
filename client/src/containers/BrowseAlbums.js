import React, { useEffect } from "react";
import { fetchAlbumsFromDB } from "../actions/albums";
import { connect } from "react-redux";
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
      <button onClick={() => fetchAlbumsFromDB()}>FETCH</button>
      {loading && !albums ? "LOADING..." : <AlbumsList data={albums} />}
      <button onClick={() => console.log(albums)}>show</button>
    </div>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  albums: state.albums
});

export default connect(
  mapStateToProps,
  { fetchAlbumsFromDB }
)(BrowseAlbums);
