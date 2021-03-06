import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchAlbumById } from "../../actions/search";
import { selectAlbumFromDB } from "../../actions/albums";

const Title = styled.p`
  word-wrap: break-word;
  font-weight: bold;
`;

const Album = styled.div`
  display: flex;
  margin: 10px;
  width: calc(50% - 20px);
`;

const Image = styled.img`
  width: 100%;
  :hover {
    opacity: 0.6;
    transition: 0.18s;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AlbumItem = props => {
  const { album, dbitems } = props;

  if (dbitems === true) {
    console.log(album.reviews);
    return (
      <Album key={album._id} onClick={() => props.selectAlbumFromDB(album._id)}>
        <StyledLink to={`/details/${album._id}`}>
          <Image src={album.cover_medium} alt={album.title} />
          <Title>{album.artist.name}</Title>
          <p>{album.title}</p>
        </StyledLink>
      </Album>
    );
  }

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
  { fetchAlbumById, selectAlbumFromDB }
)(AlbumItem);
