import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/search';
import AlbumsList from '../components/AlbumsList';

const SearchAlbums = ({ fetchAlbums, data }) => {
  const [search, setSearchTerm] = useState();

  const handleSearch = e => {
    e.preventDefault();
    console.log(search);
    //run fetching
    fetchAlbums(search);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          name="searchTerm"
          placeholder="Search album"
          type="text"
          value={search}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <input type="submit" />
      </form>
      <AlbumsList data={data} />
    </>
  );
};

const mapStateToProps = state => ({
  data: state.search.data
});
export default connect(
  mapStateToProps,
  { fetchAlbums }
)(SearchAlbums);
