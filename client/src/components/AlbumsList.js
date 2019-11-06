import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = styled.p`
  background-color: yellow;
`;
const AlbumsList = ({ data }) => {
  return (
    <div>
      {data.map(item => {
        return (
          <div key={item.id}>
            <img src={item.cover_medium} alt={item.title} />
            <Tag>{item.title}</Tag>
          </div>
        );
      })}
    </div>
  );
};

AlbumsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default AlbumsList;
