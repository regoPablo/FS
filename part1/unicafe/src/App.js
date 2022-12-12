/*
 ******************************************
 * Component helper functions - Page re-rendering
 ******************************************
 */

import { useState } from "react";

/*
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hola {name}, tienes {age} años
      </p>
      <p>Probablemente has nacido en el año {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;

*/

/*
 ******************************************
 * Stateful component
 ******************************************
 */
/*
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);

  return <div>{counter}</div>;

  
};

export default App;
*/

/*
 ******************************************
 * Event handling - Refactoring
 ******************************************
 */

/*
const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ text, clickFn }) => {
  return <button onClick={clickFn}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    setCounter(counter - 1);
  };

  const setToZero = () => {
    setCounter(0);
  };
  console.log(counter);
  return (
    <div>
      <Display counter={counter} />
      <Button clickFn={increaseByOne} text="plus" />
      <Button clickFn={decreaseByOne} text="minus" />
      <Button clickFn={setToZero} text="zero" />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * Complex state
 ******************************************
 */
/*
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * Handling arrays
 ******************************************
 */
/*
const History = ({ allClicks }) => {
  const result =
    allClicks.length === 0 ? (
      <div>the app is used by pressing the buttons</div>
    ) : (
      <div>button press history: {allClicks.join(" ")}</div>
    );
  return result;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setAll(allClicks.concat("L"));
  };

  const handleRightClick = () => {
    setRight(right + 1);
    setAll(allClicks.concat("R"));
  };

  const handleResetClick = () => {
    setRight(0);
    setAll([]);
    setLeft(0);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleResetClick} text="reset" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
*/

/*
 ******************************************
 * titulo
 ******************************************
 */

/*
const Button = ({ type, clickHandler }) => {
  return <button onClick={clickHandler(type)}>{type}</button>;
};

const Display = ({ type, counter }) => {
  return (
    <p>
      {type}: {counter}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);

  const buttonHandler = (type) => {
    const handler = () => {
      switch (type) {
        case "good":
          setGood(good + 1);
          break;
        case "neutral":
          setNeutral(neutral + 1);
          break;
        case "bad":
          setBad(bad + 1);
          break;
        default:
          return;
      }

      setAll(all + 1);

      setAvg((good + neutral / 2) / all);
    };

    return handler;
  };

  console.log(good);
  console.log(neutral);
  console.log(bad);
  console.log(all);
  console.log(avg);

  return (
    <div>
      <Button type="good" clickHandler={buttonHandler} />
      <Button type="neutral" clickHandler={buttonHandler} />
      <Button type="bad" clickHandler={buttonHandler} />
      <Display type="good" counter={good} />
      <Display type="neutral" counter={neutral} />
      <Display type="bad" counter={bad} />
      <p>all {all}</p>
      <p>average {avg}</p>
    </div>
  );
};

export default App;
*/
/*
 ******************************************
 * Unicafe 1.6, 1.7
 ******************************************
 */
/*
const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ type, clickHandler }) => {
  return <button onClick={clickHandler}>{type}</button>;
};

const Display = ({ type, counter }) => {
  return (
    <p>
      {type}: {counter}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const avg = all !== 0 ? (good - bad) / all : 0;
  const positive = good !== 0 ? (good / all) * 100 + " %" : 0 + " %";

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button type="good" clickHandler={addGood} />
      <Button type="neutral" clickHandler={addNeutral} />
      <Button type="bad" clickHandler={addBad} />
      <Header text="statistics" />
      <Display type="good" counter={good} />
      <Display type="neutral" counter={neutral} />
      <Display type="bad" counter={bad} />
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default App;

*/

/*
 ******************************************
 * Unicafe 1.8, 1.9, 1.10, 1.11
 ******************************************
 */

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ type, clickHandler }) => {
  return <button onClick={clickHandler}>{type}</button>;
};

const Statistic = ({ type, result }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{result}</td>
    </tr>
  );
};

const Statistics = ({ rates }) => {
  const [good, neutral, bad] = rates;

  if (good === 0 && neutral === 0 && bad === 0) return <p>No feedback given</p>;

  const all = good + neutral + bad;
  const avg = all !== 0 ? (good - bad) / all : 0;
  const positive = good !== 0 ? (good / all) * 100 + " %" : 0 + " %";

  return (
    <table>
      <tbody>
        <Statistic type={"good"} result={good} />
        <Statistic type={"neutral"} result={neutral} />
        <Statistic type={"bad"} result={bad} />
        <Statistic type={"all"} result={all} />
        <Statistic type={"avg"} result={avg} />
        <Statistic type={"positve"} result={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button type="good" clickHandler={addGood} />
      <Button type="neutral" clickHandler={addNeutral} />
      <Button type="bad" clickHandler={addBad} />
      <Header text="statistics" />
      <Statistics rates={[good, neutral, bad]} />
    </div>
  );
};

export default App;
