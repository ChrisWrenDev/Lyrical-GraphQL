import React, { useState } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

const SongCreate = (props) => {
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props
      .mutate({
        variables: {
          title,
        },
        refetchQueries: [{ query }],
      })
      .then(() => hashHistory.push("/"));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={submitHandler}>
        <label>Song Title:</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title)
  }
`;

export default graphql(mutation)(SongCreate);
