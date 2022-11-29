/*const PrintName = (props) => {
  let { name, age } = props;
  return (
    <p>
      Me llamo {name} y tengo {age} años
    </p>
  );
};

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <PrintName name="Pablo" age={31} />
      <PrintName name="Sara" age={30} />
    </div>
  );
};
*/

/*
 ******************************************
 * CODIGO INICIAL EJERCICIO 1.1
 ******************************************
 */

/*
const App = () => {
  const course = "Half Stack App Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * RESOLUCION EJERCICIO 1.1
 ******************************************
 */

/*
const Header = (props) => {
  return <h1>{props.courseTittle}</h1>;
};

const Content = (props) => {
  const { tittle, numExercises } = props;

  let result = [];

  for (const [i, ele] of tittle.entries()) {
    result.push(
      <p key={i}>
        {ele} {numExercises[i]}
      </p>
    );
  }

  return <div>{result}</div>;
};

const Total = ({ sumExercises }) => <p>Number of exercises {sumExercises}</p>;

const App = () => {
  const course = "Half Stack App Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseTittle={course} />
      <Content
        tittle={[part1, part2, part3]}
        numExercises={[exercises1, exercises2, exercises3]}
      />
      <Total sumExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * RESOLUCION DEL EJERCICIO 1.2
 ******************************************
 */

/*
const Part = ({ tittle, numExercises }) => (
  <p>
    {tittle} {numExercises}
  </p>
);

const Header = (props) => {
  return <h1>{props.courseTittle}</h1>;
};

const Content = (props) => {
  const { tittle, numExercises } = props;
  console.log(numExercises[0]);
  return (
    <div>
      <Part tittle={tittle[0]} numExercises={numExercises[0]} />
      <Part tittle={tittle[1]} numExercises={numExercises[1]} />
      <Part tittle={tittle[2]} numExercises={numExercises[2]} />
    </div>
  );
};

const Total = ({ sumExercises }) => <p>Number of exercises {sumExercises}</p>;

const App = () => {
  const course = "Half Stack App Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseTittle={course} />
      <Content
        tittle={[part1, part2, part3]}
        numExercises={[exercises1, exercises2, exercises3]}
      />
      <Total sumExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;

*/

/*
 ******************************************
 * RESOLUCION EJERCICIO 1.3
 ******************************************
 */

/*
const Part = ({ tittle, numExercises }) => (
  <p>
    {tittle} {numExercises}
  </p>
);

const Header = (props) => {
  return <h1>{props.courseTittle}</h1>;
};

const Content = (props) => {
  const { tittle, numExercises } = props;
  console.log(numExercises[0]);
  return (
    <div>
      <Part tittle={tittle[0]} numExercises={numExercises[0]} />
      <Part tittle={tittle[1]} numExercises={numExercises[1]} />
      <Part tittle={tittle[2]} numExercises={numExercises[2]} />
    </div>
  );
};

const Total = ({ sumExercises }) => <p>Number of exercises {sumExercises}</p>;

const App = () => {
  const course = "Half Stack App Development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  
  return (
    <div>
      <Header courseTittle={course} />
      <Content
        tittle={[part1.name, part2.name, part3.name]}
        numExercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Total
        sumExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * RESOLUCIÓN EJERCICIO 1.4
 ******************************************
 */

/*
const Part = ({ info }) => {
  const { name, exercises } = info;
  return (
    <p>
      {name} tiene un total de {exercises}
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.courseTittle}</h1>;
};

const Content = ({ parts }) => {
  //console.log(parts[0]);

  return (
    <div>
      <Part info={parts[0]} />
      <Part info={parts[1]} />
      <Part info={parts[2]} />
    </div>
  );
};

const Total = ({ sumExercises }) => {
  let suma =
    sumExercises[0].exercises +
    sumExercises[1].exercises +
    sumExercises[2].exercises;
  return <p>Total de ejercicios {suma}</p>;
};

const App = () => {
  const course = "Half Stack App Development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header courseTittle={course} />
      <Content parts={parts} />
      <Total sumExercises={parts} />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * RESOLUCIÓN EJERCICIO 1.5
 ******************************************
 */

const Part = ({ info }) => {
  const { name, exercises } = info;
  return (
    <p>
      {name} tiene un total de {exercises}
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.courseTittle}</h1>;
};

const Content = ({ parts }) => {
  //console.log(parts[0]);

  return (
    <div>
      <Part info={parts[0]} />
      <Part info={parts[1]} />
      <Part info={parts[2]} />
    </div>
  );
};

const Total = ({ sumExercises }) => {
  let suma =
    sumExercises[0].exercises +
    sumExercises[1].exercises +
    sumExercises[2].exercises;
  return <p>Total de ejercicios {suma}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack App Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseTittle={course.name} />
      <Content parts={course.parts} />
      <Total sumExercises={course.parts} />
    </div>
  );
};

export default App;
