import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchAlbums, fetchAlbumById } from "../actions/search";
import AlbumsList from "../components/albums/AlbumsList";
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
  color: #ffffff;
  :focus {
    width: 50%;
    outline: 0;
  }
`;

const Title = styled.p`
  word-wrap: break-word;
`;

const Album = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  width: 25%;
`;

const Image = styled.img`
  :hover {
    opacity: 0.6;
    transition: 0.18s;
    transform: scale(1.1);
  }
`;

const SearchAlbums = ({
  search: { data, loading },
  fetchAlbums,
  fetchAlbumsFromDB,
  fetchAlbumById
}) => {
  const [search, setSearchTerm] = useState("");
  useEffect(() => {
    fetchAlbumsFromDB();
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    fetchAlbums(search);
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
      {loading ? "LOADING..." : <AlbumsList data={data} />}
    </>
  );
};

const mapStateToProps = state => ({
  search: state.search
});
export default connect(
  mapStateToProps,
  { fetchAlbums, fetchAlbumsFromDB, fetchAlbumById }
)(SearchAlbums);
