import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  if (this.props.data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="collection">
      <renderSongs />
    </ul>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
