import React, { useContext } from "react";
import { useNiceState } from "../../hooks/useNiceState";
import { ACTIONS_textLearn, Person, TestLearnState } from "./testLearnState";

type Props = {};

export default function TestLearn({}: Props) {
  return (
    <TestLearnState.Provider>
      <div>
        <h1>TestLearn</h1>
        <TestLearn1 />
        <TestLearn2 />
        <TestLearn3 />
      </div>
    </TestLearnState.Provider>
  );
}

function TestLearn1() {
  const [state, dispatch] = TestLearnState.getContext();

  return (
    <div>
      <h2>test 1</h2>
      <div>
        value : {state.name} {state.id}
      </div>
    </div>
  );
}
function TestLearn2() {
  const [state, dispatch] = TestLearnState.getContext();
  return (
    <div>
      <h2>test 2</h2>
      <button onClick={() => dispatch({ type: ACTIONS_textLearn.changeName, payload: state.name == "a" ? "b" : "a" })}>
        change Name
      </button>
    </div>
  );
}
function TestLearn3() {
  return (
    <div>
      <h2>test 3</h2>
    </div>
  );
}
