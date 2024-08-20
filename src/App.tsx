import "./App.scss";
import { Array123 } from "./components/Array/Array";
import { CompA } from "./components/CompA/CompA";
import { UserProvider } from "./hooks/UserContext";
import User from "./components/CompA/User";
import Main1 from "./components/Reducer/Main1";
import { useEffect } from "react";
import { CompAProvider, StateCreator } from "./hooks/CompAContext";
import TestLearn from "./components/TestLearn/TestLearn";
import Form from "./components/Form/Form";
// import { Button } from /"./components/Button/Button";
// import { Card } from "./components/Card";
// import { Student } from "./components/Student/Student";
// import { Item, List } from "./components/List/List";
// import { UserGreeting } from "./components/UserGreeting/UserGreeting";
// import { Food } from "./components/Food";
// import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";

// const list: Item[] = [
//   { id: 1, name: "item1", value: 4 },
//   { id: 2, name: "item2", value: 2 },
//   { id: 3, name: "item3", value: 3 },
//   { id: 4, name: "item4", value: 1 },
// ];
// const list2: Item[] = [
//   { id: 5, name: "item5", value: 6 },
//   { id: 6, name: "item6", value: 7 },
//   { id: 7, name: "item7", value: 8 },
//   { id: 8, name: "item8", value: 9 },
// ];
// const list3: Item[] = [];

export function App() {
  useEffect(() => {
    console.log("App");
  });

  return (
    <CompAProvider>
      <UserProvider>
        <div className="app">
          <h1>App</h1>
          {/* <CompA />
            <Main1 />
            <User /> */}
          {/* <TestLearn /> */}

          <Form />
        </div>
      </UserProvider>
    </CompAProvider>
  );
}

{
  /*
<Header />
<Food />
<Footer /> */
}

{
  /* <Card /> */
}
{
  /* <Button /> */
}

{
  /* <Student name="Dvirus" age={27} isStudent={false} />
<Student /> */
}

{
  /* <UserGreeting isLoggedIn={true} userName="Dvirus" />
<UserGreeting isLoggedIn={false} userName="Dvirus" />
<UserGreeting isLoggedIn={true} /> */
}

{
  /* {list.length > 0 && <List items={list} category="items" />}
{list2.length > 0 && <List items={list2} category="items 2" />}
{list2.length > 0 && <List items={list2} />}
{list3.length > 0 && <List items={list3} category="items 3" />} */
}
{
  /* <Button /> */
}
{
  /* <Counter /> */
}
{
  /* <Array123 /> */
}
{
  /* <CompA /> */
}
