import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(singleGif => {
      const { id, title, images } = singleGif
      const { url } = images.downsized_medium
      return { id, title, url }
    })
    return gifs
  }
  return []
}

export default async function getGifs({ keyword = 'morty', limit = 5, page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
