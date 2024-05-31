import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

type Props = {
  category: string;
};

export function GifGrid({ category }: Props) {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((item: ImagesGifs) => (
          <GifItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

interface ImagesGifs {
  id: string;
  title: string;
  url: string;
}
