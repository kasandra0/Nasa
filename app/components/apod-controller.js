import ApodService from "./apod-service.js";

export default class ApodController {
  constructor() {
    _apodService.getApod(_drawApod)
  }
  getSpecificDate(event) {
    event.preventDefault();
    let date = event.target.date.value
    _apodService.getApod(_drawApod, date);
  }
}
let _apodService = new ApodService();
function _drawApod(apod) {
  let template = '';
  template += `
          <img src="${apod.url}">
          <h2>${apod.title}</h2>
          <p>${apod.explanation}</p>
        `
  document.getElementById('apod-frame').innerHTML = template;
}