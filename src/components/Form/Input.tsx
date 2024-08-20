import React, { useState } from "react";
import { useNiceState, WriteableNiceState } from "../../hooks/useNiceState";

type Props<T> = {
  value: [T, React.Dispatch<React.SetStateAction<T>>] | WriteableNiceState<T>;
  label?: string;
};

export default function Input<T>({ value, label }: Props<T>) {
  //   if ("set" in value) {
  //   }
  //   if (label) {
  //     return (
  //       <label>
  //         {label}
  //         <input type="text" value={} />
  //       </label>
  //     );
  //   }
}
