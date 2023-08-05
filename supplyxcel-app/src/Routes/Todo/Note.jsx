import React from "react";
import'./Todo.scss';

function Note(props) {
  function handleClick() {
    props.ondelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="deleteButton" onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
