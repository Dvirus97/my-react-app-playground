import { useCallback, useEffect } from "react";
import { useNiceState, WriteableNiceState } from "./useNiceState";

export function useFetch<T>(url: string, initVal: T) {
  const data = useNiceState(initVal);
  const loadState = useNiceState(false);

  const getData = useCallback(async () => {
    loadState.set(true);
    const res = await fetch(url);
    const d = await res.json();
    setTimeout(() => {
      data.set(d);
      loadState.set(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return [data, loadState] as [WriteableNiceState<T>, WriteableNiceState<boolean>];
}
