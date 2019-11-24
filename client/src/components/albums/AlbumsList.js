import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "./AlbumItem";

import styled from "styled-components";

const StyledFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

const AlbumsList = ({ data }) => {
  return (
    <StyledFlexbox>
      {data.map(item => (
        <AlbumItem key={item._id} album={item} />
      ))}
    </StyledFlexbox>
  );
};

AlbumsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default AlbumsList;
