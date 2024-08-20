import { createContext } from "react";
import { useFetch } from "./useFetch";
import { WriteableNiceState } from "./useNiceState";

type IUserContext = {
  users: WriteableNiceState<any[]>;
  loading: WriteableNiceState<boolean>;
};

export const userContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: { children: JSX.Element }) {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, loading] = useFetch<any[]>(url, []);

  return <userContext.Provider value={{ users, loading }}>{children}</userContext.Provider>;
}
