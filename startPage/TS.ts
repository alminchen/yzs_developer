function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));
let createdByBoolean: boolean = Boolean(0);
console.log(createdByBoolean);
let myName: string = "Tom";
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sentence);
alertName();
function alertName(): void {
  console.log("My name is Tom");
}
let unusable: void = undefined;
let n: null = null;
console.log(unusable, n);

let myFavoriteNumber: any = "seven";
myFavoriteNumber = 7;
console.log(myFavoriteNumber);

interface Person {
  name: string;
  age: number;
  country?: string;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  country: "USA"
};
console.log(tom);
console.log(tom.name, tom.age);
const myData = `My name is ${tom.name},Come from ${
  tom.country
},I'll be ${tom.age + 1} years old next month.`;
console.log(myData);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 10 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = newSquare.area * newSquare.area;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black", width: 1 } as SquareConfig);
console.log(mySquare);

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
console.log(typeof myObj);
printLabel(myObj);

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    console.log(1);
    console.log(`Hello,${this.greeting}`);
    // return "Hello, " + this.greeting;
  }
}
console.log(new Greeter("1"));
let greeter = new Greeter("world");

greeter.greet();

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let sam1: Animal = new Snake("Sam the JS");
let tom1: Animal = new Horse("Tommy the Palomino");
sam1.move(1);
sam.move();
tom1.move(34);

class Animal1 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal1 {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  privated() {
    console.log(`private name is ${this.name}`);
  }
}

let animal1 = new Animal1("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
employee.privated();
animal1 = rhino;

class Person1 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  testProtected() {
    return this.name;
  }
}

class Employee1 extends Person1 {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howName = new Person1("myTest");
let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howName.testProtected());

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// let passcode = "secret passcode";
// class Employee2 {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let employee2 = new Employee2();
// employee2.fullName = "Bob Smith";
// if (employee2.fullName) {
//     console.log(employee2.fullName);
// }

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2));
let myAdd = function(x: number, y: number): number {
  return x + y;
};
console.log(myAdd(2, 3));
let myAdd1: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myAdd1(1, 2));

function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
let result1 = buildName("Bob"); // works correctly now  // error, too many parameters
let result3 = buildName("Bob", "Adams");
console.log(result1, result3);

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: number | { suit: string; card: number }[]): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

function identity<T>(arg: T): T {
  return arg;
}

let outPut = identity<number>(1);
let out1 = identity<string>("1");

console.log(outPut, out1);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

let long = loggingIdentity(["1"]);
console.log(long);

function arrayIdentity<T>(arg: Array<T>): Array<T> {
  return arg;
}

let arrayL = arrayIdentity(["1", "2"]);
console.log(arrayL);

let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity<number>(1));

let myIdentity1: { <T>(arg: T): T } = identity;
console.log(myIdentity1<string>("hello"));

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity2: GenericIdentityFn = identity;
console.log(myIdentity2<number>(121));

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
let ss = myGenericNumber.add(1, 2);
console.log(ss);

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "111";
stringNumeric.add = function(x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
  length: string;
}

function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(typeof arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

let logg = loggingIdentity1({ length: "10", x: 3 });
console.log(logg.x);

enum Enum {
  a,
  b,
  c,
  d,
  e
}
let a = Enum.a;
let b = Enum.b;
console.log(a);
let nameOfA = Enum[Enum.a]; // "A"
let nameOfB = Enum[b];
console.log(nameOfA, nameOfB);

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];

interface Named {
  name: number;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let xxa = { name: 1 };
let y = { name: "Alice", location: "Seattle" };
x = xxa;

console.log(x);

let x1 = (a1: number) => 0;
let y1 = (b1: number, s: string) => 0;
console.log((y1 = x1));

let items = [1, 2, 3];

// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item, index));

// Should be OK!
items.forEach(item => console.log(item));
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    console.log(111);
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var nd = jim.name;
jim.log();

console.log(nd);

function padLeft(value: string, padding: string | number | boolean) {
  if (typeof padding === "number") {
    return padding + 1 + "," + value;
    // return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

var news = padLeft("Hello world", 4); // returns "    Hello world"
console.log(news);

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  console.log(padder); // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  console.log(padder); // 类型细化为'StringPadder'
}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

var names1 = getName("Jim");
console.log(names1);

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
  // should error here - we didn't handle case "triangle"
}

let ssW = area({ kind: "rectangle", width: 20, height: 20 });
console.log(ssW);

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
function area1(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s); // error here if there are missing cases
  }
}

let ssWi = area1({ kind: "rectangle", width: 20, height: 20 });
console.log(ssWi);

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2)
  .multiply(5)
  .add(2)
  .currentValue();
console.log(v)


class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
      super(value);
  }
  public sin():this {
      // this.value = Math.sin(this.value);
      this.value = this.value *this.value;
      return this;
  }
  // ... other operations go here ...
}

let v1 = new ScientificCalculator(2)
      .multiply(5)
      .sin()
      .add(1)
      .currentValue();
console.log(v1)