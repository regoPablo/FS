/*
 ******************************************
 * Teoria Parte 2 - Formularios
 ******************************************
 */
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

/*
 ******************************************
 * Phone guide 2.6 - 2.8
 ******************************************
 */

/*

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

*/

/*
 ******************************************
 * PhoneBook 2.9-2.10
 ******************************************
 */

/*
import React, { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const PhoneList = ({ numbers, filter }) => {
  const filteredNumbers = filter
    ? numbers.filter((number) =>
        number.name.toLowerCase().includes(filter.toLowerCase())
      )
    : numbers;

  return (
    <ul>
      {filteredNumbers.map((number) => (
        <li key={number.name}>
          {number.name} {number.number}
        </li>
      ))}
    </ul>
  );
};

const Filter = ({ text, filterHandler }) => {
  return (
    <div>
      {text} <input onChange={filterHandler}></input>
    </div>
  );
};

const PersonForm = ({ texts, handlers }) => {
  return (
    <form>
      <div>
        {texts.name} <input onChange={handlers.nameHandler} />
      </div>
      <div>
        {texts.number} <input onChange={handlers.numberHandler} />
      </div>
      <div>
        <button type="submit" onClick={handlers.addPerson}>
          {texts.add}
        </button>
      </div>
    </form>
  );
};

const checkRepeated = (nameList, newName) => {
  const found = nameList.find((ele) => ele.name === newName);
  return found === undefined ? false : true;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const isRepeated = checkRepeated(persons, newName);

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

  const filterHandler = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Filter text="filter numbers:" filterHandler={filterHandler} />
      <Header text="Add a new" />
      <PersonForm
        texts={{ name: "name:", number: "number:", add: "add" }}
        handlers={{
          nameHandler: nameHandler,
          numberHandler: numberHandler,
          addPerson: addPerson,
        }}
      />
      <Header text="Numbers" />
      <PhoneList numbers={persons} filter={filter} />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * Phonebook 2.11
 ******************************************
 */

import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const PhoneList = ({ numbers, filter }) => {
  const filteredNumbers = filter
    ? numbers.filter((number) =>
        number.name.toLowerCase().includes(filter.toLowerCase())
      )
    : numbers;

  return (
    <ul>
      {filteredNumbers.map((number) => (
        <li key={number.id}>
          {number.name} {number.number}
        </li>
      ))}
    </ul>
  );
};

const Filter = ({ text, filterHandler }) => {
  return (
    <div>
      {text} <input onChange={filterHandler}></input>
    </div>
  );
};

const PersonForm = ({ texts, handlers }) => {
  return (
    <form>
      <div>
        {texts.name} <input onChange={handlers.nameHandler} />
      </div>
      <div>
        {texts.number} <input onChange={handlers.numberHandler} />
      </div>
      <div>
        <button type="submit" onClick={handlers.addPerson}>
          {texts.add}
        </button>
      </div>
    </form>
  );
};

const checkRepeated = (nameList, newName) => {
  const found = nameList.find((ele) => ele.name === newName);
  return found === undefined ? false : true;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const isRepeated = checkRepeated(persons, newName);

    if (!isRepeated) {
      const newPerson = {
        id: persons.length + 1,
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

  const filterHandler = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Filter text="filter numbers:" filterHandler={filterHandler} />
      <Header text="Add a new" />
      <PersonForm
        texts={{ name: "name:", number: "number:", add: "add" }}
        handlers={{
          nameHandler: nameHandler,
          numberHandler: numberHandler,
          addPerson: addPerson,
        }}
      />
      <Header text="Numbers" />
      <PhoneList numbers={persons} filter={filter} />
    </div>
  );
};

export default App;
