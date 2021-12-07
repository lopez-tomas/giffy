const apiKey = process.env.REACT_APP_GIPHY_API_KEY

export default async function getGifs({ keyword = 'morty', limit = 1 } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
  const response = await fetch(apiURL)
  const {data = []} = await response.json()
  if (Array.isArray(data)) {
    const gifs = data.map(image => image.images.downsized_medium.url)
    return gifs
  }
}
