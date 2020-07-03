import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const normalizeCardNumber = (value) => {
  return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          name="cardNumber"
          id="cardNumber"
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeCardNumber(value)
          }}
          ref={register}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
