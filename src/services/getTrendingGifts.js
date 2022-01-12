import { API_KEY, URI } from "./config"


export default function getTrendingGifts() {
  const apiTrending = `${URI}trending/searches?api_key=${API_KEY}`

  return fetch(apiTrending)
    .then((res) => res.json())
    .then((response) => {
      const {data} = response
   
      return  data
    })
}
