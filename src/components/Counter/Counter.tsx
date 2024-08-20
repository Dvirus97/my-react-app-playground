import { ChangeEvent, useState } from "react";

type Props = {};

const Counter = ({}: Props) => {
  const [name, setName] = useState("a");
  const [age, setAge] = useState(0);

  //   function changeName(event: ChangeEvent<HTMLInputElement>) {
  //     setName(event.target.value);
  //   }
  function addAge() {
    setAge((x) => x + 1);
  }

  return (
    <div>
      <p>name: {name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>age: {age}</p>
      {/* <button onChange={changeName}>changeName</button> */}
      <button onClick={addAge}>addAge</button>
    </div>
  );
};

export default Counter;
