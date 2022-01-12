import { API_KEY, URI } from "./config"


export default function getGifts({keyword}) {
  const apiURL = `${URI}gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      const GIFT = data.map((image) => {
        const { images, title, id } = image // Destructuracion de image
        const { url } = images.fixed_height // Destructuracion de url
        return { title, id, url } // retorno los valores al map para crear el nuevo array de objetos
      })
      return GIFT // Retorno el array
    })
}
