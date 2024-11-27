import { useState } from "react";

export default function App() {
  const [inputType, setInputType] = useState<string>("text");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>(undefined);

  const [tempName, setTempName] = useState<string>("");
  const [tempAge, setTempAge] = useState<number | undefined>(undefined);

  const handlePasswordCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setInputType(checked ? "text" : "password");
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAge(value ? Number(value) : undefined);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTempName(name);
    setTempAge(age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name} type={inputType} onChange={handleName} required />
        </label>
        <label>
          Password
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handlePasswordCheckbox}
          />
        </label>
        <br />
        <br />
        <label>
          Age
          <input
            value={age !== undefined ? age : ""}
            type="number"
            onChange={handleAge}
            required
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
      <hr />
      Live Change: (Will change as the input changes)
      <br />
      <h1>
        Hello {name}, you are {age !== undefined ? age : "unknown"} years old.
      </h1>
      <hr />
      On Submit Change: (Will only change once the form is submitted)
      <br />
      <h1>
        Hello {tempName}, you are {tempAge !== undefined ? tempAge : "unknown"} years old.
      </h1>
    </div>
  );
}