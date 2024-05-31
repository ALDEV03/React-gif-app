import { useState } from "react";
type Props = {
  onAddCategory: (inputValue: string) => void;
};

export function AddCategory({ onAddCategory }: Props) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    inputValue.trim().length <= 1 ? null : onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
