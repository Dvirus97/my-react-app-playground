import React from "react";

type Props = {};

export default function Form({}: Props) {
  function formSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>
          <input type="text" name="name" />
        </label>

        <button>submit</button>
      </form>
    </div>
  );
}
