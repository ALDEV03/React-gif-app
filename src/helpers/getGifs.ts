export const getGifs = async (category: string) => {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=ad3ZmBhNUwENIFRwnpRGfcwOQzia63fU&q=${category}&limit=5`
  );
  const { data } = await url.json();

  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
