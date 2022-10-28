import React, { useState } from "react";

function CreateArea(props) {
  const [addarea, setAddarea] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAddarea((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={addarea.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={addarea.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(addarea);
            setAddarea({ title: "", content: "" });
            // to prevent the <form> default action
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
