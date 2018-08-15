import { Thing } from "./thing";

class Fleet {
  private things: Thing[];
  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    console.log(this.things);
  }
}

export { Fleet };