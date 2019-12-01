import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/search";
import AlbumsList from "../components/albums/AlbumsList";
import styled from "styled-components";
import { fetchAlbumsFromDB } from "../actions/albums";

const Input = styled.input`
  width: 150px;
  box-sizing: border-box;
  border: 0px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  padding: 8px 20px 8px 18px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus {
    width: 50%;
    outline: 0;
  }
`;
const SearchAlbums = ({
  search: { data, loading },
  fetchAlbums,
  fetchAlbumsFromDB
}) => {
  const [search, setSearchTerm] = useState("");
  useEffect(() => {
    fetchAlbumsFromDB();
    console.log("loaded");
  }, []);

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
        <Input
          name='searchTerm'
          placeholder='Search album'
          type='text'
          value={search}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <input type='submit' />
      </form>
      {loading ? "LOADING..." : <AlbumsList data={data} dbitems={false} />}
    </>
  );
};

const mapStateToProps = state => ({
  search: state.search
});
export default connect(
  mapStateToProps,
  { fetchAlbums, fetchAlbumsFromDB }
)(SearchAlbums);
