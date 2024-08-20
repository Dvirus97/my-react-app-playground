import { useContext, useEffect } from "react";
import { userContext } from "../../hooks/UserContext";

type Props = {};

export default function User({}: Props) {
  const { users, loading } = useContext(userContext)!;
  //   const users = useNiceState<any[]>(() => user.data);
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   const [users, userLoading] = useFetch(url, []);

  //   const a = useCallback(async () => {
  //     const res = await user.getAll();
  //     console.log("use callback", res);
  //     users.set(res);
  //   }, []);

  useEffect(() => {
    //   a();
    console.log("user comp");
  }, []);

  return (
    <div>
      <div>{loading() ? "loading..." : "finish"}</div>
      {users().map((x: any) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
}
