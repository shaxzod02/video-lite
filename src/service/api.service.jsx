import axios from "axios"

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '7d065a6491mshb561a82ae889b10p19bc26jsn490462423ddd',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  }
};

  

//... rest of your code here...


export const ApiService  = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response

    },
}