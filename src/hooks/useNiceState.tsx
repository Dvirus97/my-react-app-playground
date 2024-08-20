import { SetStateAction, useState } from "react";

class State<T> {
  private val: T;
  private fn: React.Dispatch<SetStateAction<T>>;

  constructor(state: [T, React.Dispatch<React.SetStateAction<T>>]) {
    this.val = state[0];
    this.fn = state[1];
  }

  public get value(): T {
    return this.val;
  }
  public set value(value: SetStateAction<T>) {
    this.fn(value);
  }
}

export type NiceState<T> = {
  (): T;
};
export type WriteableNiceState<T> = NiceState<T> & {
  set(newValue: T): void;
  update(updater: (prevState: T) => T): void;
  asReadOnly: () => NiceState<T>;
};

export function useNiceState<T>(initVal: T | (() => T)): WriteableNiceState<T> {
  const state = new State(useState(initVal));
  const value: WriteableNiceState<T> = () => {
    return state.value ?? ({} as T);
  };
  value.set = (newValue) => {
    state.value = newValue;
  };
  value.update = (updater) => {
    state.value = updater;
  };
  value.asReadOnly = () => {
    return (() => value()) as NiceState<T>;
  };
  value.toString = () => {
    return `[NiceState: ${state.value}]`;
  };

  return value;
}
