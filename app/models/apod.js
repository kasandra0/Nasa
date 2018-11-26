export default class Apod {
  constructor(data) {
    this.title = data.title;
    this.explanation = data.explanation;
    this.url = data.url;
    this.data = data.date;
    this.media_type = data.media_type;
  }
}