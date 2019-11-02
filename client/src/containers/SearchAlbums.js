import React from "react";
import axios from "axios";
class SearchAlbums extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=album:"sweet"'
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <form>
        <input name='searchTerm' placeholder='Search album' type='text' />
        <input type='submit' />
      </form>
    );
  }
}

export default SearchAlbums;
