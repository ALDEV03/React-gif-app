import { ReactNode, useState } from "react";
import { AddCategory, GifGrid } from "./components";

type Props = {
  children?: ReactNode;
};

function GifExpertApp({ children }: Props) {
  const [categories, setCategories] = useState(["Luffy"]);

  const onAddCategory = (inputValue: string) => {
    if (categories.includes(inputValue)) return;
    setCategories([...categories, inputValue]);
  };

  return (
    <>
      <h1>{children}</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
}

export default GifExpertApp;
