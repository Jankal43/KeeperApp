import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    inputTitle: "",
    inputContent: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      if (name === "title") {
        return {
          inputTitle: value,
          inputContent: prevValue.inputContent,
        };
      } else if (name === "content") {
        return {
          inputTitle: prevValue.inputTitle,
          inputContent: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    props.onAdd(input); // Call the onAdd prop with the input
    setInput({
      inputTitle: "",
      inputContent: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.inputTitle}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.inputContent}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
