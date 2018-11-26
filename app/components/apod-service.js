import Apod from "../models/apod.js";


export default class ApodService {
  constructor() {

  }
  getApod(draw, date) {
    let requestString = 'https://api.nasa.gov/planetary/apod?api_key=' + _APIkey
    if (date) {// 'YYYY-MM-DD' 
      requestString += '&date=' + date
    }
    _nasaAPI.get(requestString)
      .then(response => {
        let apod = new Apod(response.data);
        draw(apod)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
// PRIVATE
let _nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})
let _APIkey = 'yoIDb9YcnnGEZeeWCThST2KVNImqy5WKUorGqeYK'