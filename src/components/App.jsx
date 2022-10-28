import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newnote, setNewnote] = useState([]);

  function handleAdd(addarea) {
    setNewnote((prevNote) => {
      return [...prevNote, addarea];
    });
  }

  function deleteNote(id) {
    setNewnote((prevNote) => {
      return prevNote.filter((addarea, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {/* the map function need to outside the Note Compnent */}
      {newnote.map((addarea, index) => (
        <Note
          // key,id={index}: recognize the specfic note id
          key={index}
          id={index}
          // onDelete is an parameter that deine in Note.jsx
          // deleteNote is function to filter and execute which to delete
          onDelete={deleteNote}
          title={addarea.title}
          content={addarea.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
