export const getGifs = async (category) => {
    const apiKey = 'xcHg7FIQp6WWKUMHPvCKBqLhvryFI31E';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const arrayData = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url
    }
    ));
   return arrayData;

}
