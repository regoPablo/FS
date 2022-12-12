import { useState } from "react";

const Button = ({ tittle, clickHandler }) => {
  return <button onClick={clickHandler}>{tittle}</button>;
};

const Header = ({ tittle }) => {
  return <h1>{tittle}</h1>;
};

const MostVoted = ({ votes, anecdotes }) => {
  const maxVoted = Math.max(...votes);
  const maxVotedAnecdote = votes.indexOf(maxVoted);
  return <p>{anecdotes[maxVotedAnecdote]}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(7));

  const randomAnecdote = () => {
    const rngNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(rngNumber);
  };

  const addVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected]++;
    setVotes(votesCopy);
  };

  return (
    <div>
      <Header tittle="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>tiene {votes[selected]} votos</p>
      <Button tittle="vote" clickHandler={addVotes} />
      <Button tittle="next anecdote" clickHandler={randomAnecdote} />
      <Header tittle="Anecdote with most votes" />
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
