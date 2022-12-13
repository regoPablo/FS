/*
 ******************************************
 * Teoria consle.log - when app breaks
 ******************************************
 */

// import Note from "./components/Note";

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

/*
 ******************************************
 * Course information 2.1-2.2
 ******************************************
 */
/*
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <SumExercises exercises={parts} />
    </div>
  );
};

const SumExercises = ({ exercises }) => {
  let sum = 0;
  for (let i = 0; i < exercises.length; i++) {
    sum += exercises[i].exercises;
  }
  return <strong>Total de {sum} ejercicios</strong>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
*/

/*
 ******************************************
 * Course information 2.3
 ******************************************
 */
/*
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <SumExercises parts={parts} />
    </div>
  );
};

const SumExercises = ({ parts }) => {
  let exercisesSum = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);

  return <strong>total of {exercisesSum} exercises</strong>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
*/

/*
 ******************************************
 * Course information 2.4 - 2.5
 ******************************************
 */

import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </div>
  );
};

export default App;
