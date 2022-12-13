const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

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

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const SumExercises = ({ parts }) => {
  let exercisesSum = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);

  return <strong>total of {exercisesSum} exercises</strong>;
};

export default Course;
