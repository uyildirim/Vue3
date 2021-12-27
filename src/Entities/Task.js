export default class {
  constructor() {}
  text = null;
  date = new Date().toLocaleDateString();
  completed = false;

  setText(text) {
    this.text = text;
  }
}
