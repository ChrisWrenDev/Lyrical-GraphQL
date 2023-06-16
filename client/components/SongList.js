import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

const SongList = (props) => {
  const onSongDelete = (id) => {
    props.mutate({ variables: { id } }).then(() => props.data.refetch());
  };

  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
          <i className="material-icons" onClick={() => onSongDelete(song.id)}>
            delete
          </i>
        </li>
      );
    });
  };

  if (this.props.data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
