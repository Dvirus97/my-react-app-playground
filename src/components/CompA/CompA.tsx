import { useContext, useEffect } from "react";
import { useNiceState } from "../../hooks/useNiceState";
import styles from "./Box.module.scss";
import { CompAContext } from "../../hooks/CompAContext";

export function CompA() {
  const name = useNiceState("dvirus");
  const age = useNiceState(1);
  const person = useNiceState({ name: "dvir", age: 27 });
  const name1 = name.asReadOnly();

  useEffect(() => {
    console.log(name(), age());
  }, [name1()]);

  useEffect(() => {
    console.log("CompA");
  });

  const changeName = () => name.set(name() == "a" ? "b" : "a");
  const changeAge = () => age.update((a) => a + 1);
  const changePerson = () => {
    const name = person().name == "dvir" ? "cohen" : "dvir";
    person.update((p) => ({ ...p, age: p.age + 1, name }));
  };

  return (
    <>
      <div className={styles.box}>
        <h2>CompA</h2>
        <div>
          {name()} {age()} {name1()}
        </div>
        <div>
          {person().name} {person().age}
        </div>
        <button onClick={() => changeName()}>name</button>
        <button onClick={changeAge}>age</button>
        <button onClick={changePerson}>Person</button>
        <CompB />
      </div>
    </>
  );
}
export function CompB() {
  useEffect(() => {
    console.log("CompB");
  });

  function changeContext({}: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {}
  return (
    <>
      <div className={styles.box}>
        <h2>CompB</h2>
        <button onClick={changeContext}>change context</button>
        <CompC />
      </div>
    </>
  );
}
export function CompC() {
  const [state] = useContext(CompAContext)!;
  useEffect(() => {
    console.log("CompC");
  });

  return (
    <>
      <div className={styles.box}>
        <h2>CompC</h2>
        {state.name} {state.age}
        <CompD />
      </div>
    </>
  );
}
export function CompD() {
  const [state, dispatch] = useContext(CompAContext)!;

  useEffect(() => {
    console.log("CompD");
  });
  return (
    <>
      <div className={styles.box}>
        <h2>CompD</h2>
        <button onClick={() => dispatch({ type: "changeName", payload: "dvirus" })}>change name</button>
        <button onClick={() => dispatch({ type: "changeAge", payload: state.age + 1 })}>change age</button>
      </div>
    </>
  );
}
