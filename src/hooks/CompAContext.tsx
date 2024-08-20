import React, { Context, Reducer, useContext, useReducer } from "react";

type ICompAReducer = {
  name: string;
  age: number;
};

type ICompAAcions = { type: "changeName"; payload: string } | { type: "changeAge"; payload: number };

type ICompAContext = [state: ICompAReducer, dispatch: React.Dispatch<ICompAAcions>];

const init: ICompAReducer = {
  name: "berta",
  age: 11,
};

const CompAReducer: Reducer<ICompAReducer, ICompAAcions> = (state, actions) => {
  switch (actions.type) {
    case "changeName":
      return { ...state, name: actions.payload };
    case "changeAge":
      return { ...state, age: actions.payload };
    default:
      return state;
  }
};

export const CompAContext = React.createContext<ICompAContext | undefined>(undefined);

export function CompAProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(CompAReducer, init);

  return <CompAContext.Provider value={[state, dispatch]}>{children}</CompAContext.Provider>;
}

//

// type IReducerContext<T, A> = [state: T, dispatch: React.Dispatch<A>];

// export function StateCreator1<T, A>(initVal: T, reducer: Reducer<T, A>) {
//   const context = React.createContext<IReducerContext<T, A>>([initVal, (_) => {}]);

// }

//
export type StateCreatorActions = { type: string; payload: any };

export class StateCreator<T, A extends StateCreatorActions> {
  private context: Context<[state: T, dispatch: React.Dispatch<A>]>;

  getContext() {
    return useContext(this.context);
  }

  constructor(private initVal: T, private reducer: Reducer<T, A>) {
    this.context = React.createContext<[state: T, dispatch: React.Dispatch<A>]>([this.initVal, (_) => {}]);
  }

  Provider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(this.reducer, this.initVal);

    return <this.context.Provider value={[state, dispatch]}>{children}</this.context.Provider>;
  };
}
