export default class EventEmitter {
  constructor() {
    this.events = {};
  }
  subsribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }
  emit(eventName, data) {
    const fns = this.events[eventName] || [];
    for (const fn of fns) {
      fn.call(null, data);
    }
  }
}
