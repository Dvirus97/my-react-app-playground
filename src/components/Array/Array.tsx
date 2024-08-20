import { useState } from "react";

export function Array123() {
  const [list, setList] = useState(["a", "b", "c"]);
  const [newFood, setNewFood] = useState("");

  function addFood() {
    setList((l) => [...l, newFood]);
    setNewFood("");
  }
  function removeFood(index: number) {
    setList((l) => l.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>list of food</h2>
      <ul>
        {list.map((x, i) => (
          <li key={i}>
            {x}
            <button onClick={() => removeFood(i)}>X</button>
          </li>
        ))}
      </ul>

      <input type="text" value={newFood} onChange={(e) => setNewFood(e.target.value)} />
      <button onClick={addFood}>add</button>
    </>
  );
}
