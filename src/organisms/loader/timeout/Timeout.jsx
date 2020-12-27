export class Timeout {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.cleared = false;
    this.expired = false;
    this.id = this.getNewId(delay);
  }

  clear = () => {
    clearTimeout(this.id);
    this.cleared = true;
  };

  getNewId = (delay = null) =>
    setTimeout(() => {
      this.expired = true;
      this.callback();
    }, delay || this.delay);

  restart = (delay = null) => {
    if (this.id) {
      this.clear();
    }
    this.id = this.getNewId(delay);
  };
}