import styles from "./Student.module.scss";
// import PropTypes from "prop-types";

type props = {
  name?: string;
  age?: number;
  isStudent?: boolean;
};

export function Student(props: props) {
  return (
    <>
      <div className={styles.student}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// };
