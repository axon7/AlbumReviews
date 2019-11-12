import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <Album key={album.id}>
      <Link to='/album'>
        <Image src={album.cover_medium} alt={album.title} />
        <Title>
          {album.artist.name} - {album.title}
        </Title>
      </Link>
    </Album>
  );
};

export default AlbumItem;
