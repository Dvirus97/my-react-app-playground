import "./List.scss";

type Props = {
  items?: Item[];
  category?: string;
};
export type Item = {
  id: number | string;
  name: string;
  value: number;
};

const defaultProps = {
  items: [],
  category: "Category",
} satisfies Partial<Props>;

// export function List({items = [], category = "category"}: Props) {
export function List(props: Props) {
  props = { ...defaultProps, ...props };
  //   const list: Item[] = [
  //     { id: 1, name: "item1", value: 4 },
  //     { id: 2, name: "item2", value: 2 },
  //     { id: 3, name: "item3", value: 3 },
  //     { id: 4, name: "item4", value: 1 },
  //   ];

  //   list.sort((a, b) => a.name.localeCompare(b.name));
  //   list.sort((a, b) => b.name.localeCompare(a.name));
  //   list.sort((a, b) => a.value - b.value);
  //   list.sort((a, b) => b.value - a.value);

  //   const filteredList = list.filter((item) => item.value > 2);

  const listItems = props.items?.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.value}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

// List.defaultProps = {
//   items: [],
//   category: "Category",
// };

// type Person = {
//   name?: string;
//   age?: number;
// };
// function a({ age: myAge = 2, name = "dvirus" }: Person) {
//   console.log({ myAge, name });
// }

// a({ name: "aa" });
