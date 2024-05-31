import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const getImage = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    SetIsLoading(!isLoading);
  };

  useEffect(() => {
    getImage();
  }, []);

  return { images, isLoading };
};

export default useFetchGifs;
