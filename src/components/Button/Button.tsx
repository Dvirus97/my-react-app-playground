import { MouseEvent } from "react";
import styles from "./Button.module.scss";

export function Button() {
  // const styles1 = {
  //   backgroundColor: "hsl(200, 100%, 50%)",
  //   color: "#fff",
  //   padding: "10px 20px",
  //   borderRadius: "5px",
  //   border: "none",
  //   cursor: "pointer",
  // };

  const handleClick = (e: MouseEvent) => {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.nativeEvent);
    console.log(e.relatedTarget);
    console.log(e.getModifierState("Control"));
    console.log(e.isDefaultPrevented());
    console.log(e.isPropagationStopped());
  };
  // const handleClick2 = (name: string) => {
  //   console.log("name", name);
  // };

  return (
    <>
      {/* style={styles1} */}
      <button
        className={styles.button}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click Me
      </button>
    </>
  );
}
