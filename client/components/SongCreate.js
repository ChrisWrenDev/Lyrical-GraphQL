import React, { useState } from "react";

const SongCreate = (props) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
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

export default SongCreate;
