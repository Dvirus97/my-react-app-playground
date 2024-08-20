import { Reducer, useEffect, useReducer } from "react";

type Person = {
  name: string;
  age: number;
};

const initPerson: Person = {
  age: 0,
  name: "a",
};

export type Main1Reducer = Reducer<
  Person,
  { type: "changeName"; payload: string } | { type: "changeAge"; payload: number }
>;

export const main1Reducer: Main1Reducer = (state, actions) => {
  switch (actions.type) {
    case "changeName":
      return { ...state, name: actions.payload };
    case "changeAge":
      return { ...state, age: actions.payload };
    default:
      return state;
  }
};

type Props = {};

export default function Main1({}: Props) {
  const [state, dispatch] = useReducer(main1Reducer, initPerson);

  useEffect(() => {
    console.log("Main1");
  });

  return (
    <div>
      <h2>
        {state.name} {state.age}
      </h2>
      <p>
        <button onClick={() => dispatch({ type: "changeName", payload: state.name == "a" ? "b" : "a" })}>name</button>
        <button onClick={() => dispatch({ type: "changeAge", payload: state.age + 1 })}>age</button>
      </p>
    </div>
  );
}
