import { useEffect, useState } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, showImportant }) => {
  return <button onClick={showImportant}>{text}</button>;
};

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      })
      .catch((error) => {
        alert(`No ha sido posible recuperar las notas`);
      });
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((newNote) => {
      setNotes(notes.concat(newNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const showImportant = () => {
    showAll ? setShowAll(false) : setShowAll(true);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = {
      ...note,
      important: !note.important,
    };

    noteService.update(id, changedNote).then((updatedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)));
    });
  };
  return (
    <div>
      <Header text="Notes" />
      <Button text="Only important notes" showImportant={showImportant} />
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
