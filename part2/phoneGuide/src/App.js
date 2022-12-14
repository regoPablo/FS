/*
import { useState } from "react";
import Note from "./components/Note";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  console.log(notes);

  const addNote = (event) => {
    event.preventDefault();

    const newNote = {};
    newNote.id = notes.length + 1;
    newNote.content = event.target[0].value;

    const copyNotes = [...notes];
    copyNotes.push(newNote);
    setNotes(copyNotes);
  };

  return (
    <div>
      <Header text="Notes" />
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
*/

/*
import { useState } from "react";
import Note from "./components/Note";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, showImportant }) => {
  return <button onClick={showImportant}>{text}</button>;
};

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const showImportant = () => {
    showAll ? setShowAll(false) : setShowAll(true);
  };

  return (
    <div>
      <Header text="Notes" />
      <Button text="Only important notes" showImportant={showImportant} />
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
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

*/

import React, { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number) => {
        return (
          <li key={number.name}>
            {number.name} {number.number}
          </li>
        );
      })}
    </ul>
  );
};

const checkRepeated = (nameList, newName) => {
  const found = nameList.find((ele) => ele.name === newName);
  return found === undefined ? false : true;
};

//persons = [{name: "Arto Hellas"}]
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const isRepeated = checkRepeated(persons, newName);
    console.log(event);
    if (!isRepeated) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
      event.target.form[0].value = "";
      event.target.form[1].value = "";
    } else {
      alert(`Name ${newName} is repeated`);
      setNewName("");
      event.target.form[0].value = "";
    }
  };

  const nameHandler = (event) => {
    const newName = event.target.value;
    setNewName(newName);
  };

  const numberHandler = (event) => {
    const newNumber = event.target.value;
    setNewNumber(newNumber);
  };

  return (
    <div>
      <Header text="Phonebook" />
      <form>
        <div>
          name: <input onChange={nameHandler} />
        </div>
        <div>
          number: <input onChange={numberHandler} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <Header text="Numbers" />
      <NumberList numbers={persons} />
    </div>
  );
};

export default App;
