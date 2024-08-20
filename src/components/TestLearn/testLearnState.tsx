import { StateCreator } from "../../hooks/CompAContext";

/*
    1. create state type
    2. create actions type 
    3. create init value 
    4. new StateCreator<1,2>(3, reducer)
*/

export type Person = { name: string; id: string };

const person: Person = {
  name: "a",
  id: "1",
};

export const ACTIONS_textLearn = {
  changeName: "changeName",
  changeId: "changeId",
};

export const TestLearnState = new StateCreator(person, (state, actions) => {
  switch (actions.type) {
    case ACTIONS_textLearn.changeName:
      return { ...state, name: actions.payload };
    case ACTIONS_textLearn.changeId:
      return { ...state, id: actions.payload };
    default:
      return state;
  }
});
