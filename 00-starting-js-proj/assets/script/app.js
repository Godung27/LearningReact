/*
                      // "import" & "export"
// import {word} from "./util.js";
import word from "./util.js";
// import { name } from "./util.js";
import { name, num as number } from "./util.js";
import * as all from "./util.js";
console.log(word);
// console.log(name);
// console.log(name, num);
console.log(all.name, all.default);
console.log(number);
console.log(name);
*/


/*
                      // Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person("Godung", 27);
person1.greeting()
*/
