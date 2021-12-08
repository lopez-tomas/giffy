const apiKey = process.env.REACT_APP_GIPHY_API_KEY

export default async function getGifs({ keyword = 'morty' } = {}) {
  const limit = 10;
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

  const response = await fetch(apiURL)
  const {data = []} = await response.json()

  if (Array.isArray(data)) {
    const gifs = data.map(singleGif => {
      const { id, title, images } = singleGif
      const { url } = images.downsized_medium
      return { id, title, url }
    })
    return gifs
  }
}
