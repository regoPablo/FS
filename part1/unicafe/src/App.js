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
      {/* <p>{allClicks.join(" ")}</p> */}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
