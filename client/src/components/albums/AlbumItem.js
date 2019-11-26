import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchAlbumById } from "../../actions/search";

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
const AlbumItem = props => {
  const { album } = props;
  return (
    <Album key={album.id} onClick={() => props.fetchAlbumById(album.id)}>
      <Link to={`/search/${album.id}`}>
        <Image src={album.cover_medium} alt={album.title} />
        <Title>
          {album.artist.name} - {album.title}
        </Title>
      </Link>
      {album.rating}
    </Album>
  );
};

export default connect(
  null,
  { fetchAlbumById }
)(AlbumItem);
