class EventEmitter {
  events = {};
  subscribe(event, cb) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(cb);
    return {
        unsubscribe: () => {
          this.events[event] = this.events[event].filter(fn => fn !== cb);
        }
    };
  }

  emit(event, args = []) {
    const result = [];
    if(this.events[event]){
      for(let fn of this.events[event]){
        result.push(fn(...args));
      }
    }
    return result;
  }
}