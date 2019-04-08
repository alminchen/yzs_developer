var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Tom";
console.log(sayHello(user));
var createdByBoolean = Boolean(0);
console.log(createdByBoolean);
var myName = "Tom";
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
console.log(sentence);
alertName();
function alertName() {
    console.log("My name is Tom");
}
var unusable = undefined;
var n = null;
console.log(unusable, n);
var myFavoriteNumber = "seven";
myFavoriteNumber = 7;
console.log(myFavoriteNumber);
var tom = {
    name: "Tom",
    age: 25,
    country: "USA"
};
console.log(tom);
console.log(tom.name, tom.age);
var myData = "My name is " + tom.name + ",Come from " + tom.country + ",I'll be " + (tom.age + 1) + " years old next month.";
console.log(myData);
function createSquare(config) {
    var newSquare = { color: "white", area: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * newSquare.area;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 1 });
console.log(mySquare);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
console.log(typeof myObj);
printLabel(myObj);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(1);
        console.log("Hello," + this.greeting);
        // return "Hello, " + this.greeting;
    };
    return Greeter;
}());
console.log(new Greeter("1"));
var greeter = new Greeter("world");
greeter.greet();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var sam1 = new Snake("Sam the JS");
var tom1 = new Horse("Tommy the Palomino");
sam1.move(1);
sam.move();
tom1.move(34);
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    Employee.prototype.privated = function () {
        console.log("private name is " + this.name);
    };
    return Employee;
}());
var animal1 = new Animal1("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
employee.privated();
animal1 = rhino;
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.testProtected = function () {
        return this.name;
    };
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person1));
var howName = new Person1("myTest");
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howName.testProtected());
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
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
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 3));
var myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(1, 2));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now  // error, too many parameters
var result3 = buildName("Bob", "Adams");
console.log(result1, result3);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
function identity(arg) {
    return arg;
}
var outPut = identity(1);
var out1 = identity("1");
console.log(outPut, out1);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var long = loggingIdentity(["1"]);
console.log(long);
function arrayIdentity(arg) {
    return arg;
}
var arrayL = arrayIdentity(["1", "2"]);
console.log(arrayL);
var myIdentity = identity;
console.log(myIdentity(1));
var myIdentity1 = identity;
console.log(myIdentity1("hello"));
function identity2(arg) {
    return arg;
}
var myIdentity2 = identity;
console.log(myIdentity2(121));
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var ss = myGenericNumber.add(1, 2);
console.log(ss);
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "111";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity1(arg) {
    console.log(typeof arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
var logg = loggingIdentity1({ length: "10", x: 3 });
console.log(logg.x);
var Enum;
(function (Enum) {
    Enum[Enum["a"] = 0] = "a";
    Enum[Enum["b"] = 1] = "b";
    Enum[Enum["c"] = 2] = "c";
    Enum[Enum["d"] = 3] = "d";
    Enum[Enum["e"] = 4] = "e";
})(Enum || (Enum = {}));
var a = Enum.a;
var b = Enum.b;
console.log(a);
var nameOfA = Enum[Enum.a]; // "A"
var nameOfB = Enum[b];
console.log(nameOfA, nameOfB);
var directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */
];
var x;
// y's inferred type is { name: string; location: string; }
var xxa = { name: 1 };
var y = { name: "Alice", location: "Seattle" };
x = xxa;
console.log(x);
var x1 = function (a1) { return 0; };
var y1 = function (b1, s) { return 0; };
console.log((y1 = x1));
var items = [1, 2, 3];
// Don't force these extra arguments
items.forEach(function (item, index, array) { return console.log(item, index); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log(111);
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var nd = jim.name;
jim.log();
console.log(nd);
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return padding + 1 + "," + value;
        // return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var news = padLeft("Hello world", 4); // returns "    Hello world"
console.log(news);
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    console.log(padder); // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    console.log(padder); // 类型细化为'StringPadder'
}
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
var names1 = getName("Jim");
console.log(names1);
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
    }
    // should error here - we didn't handle case "triangle"
}
var ssW = area({ kind: "rectangle", width: 20, height: 20 });
console.log(ssW);
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area1(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
        default:
            return assertNever(s); // error here if there are missing cases
    }
}
var ssWi = area1({ kind: "rectangle", width: 20, height: 20 });
console.log(ssWi);
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(2)
    .currentValue();
console.log(v);
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        // this.value = Math.sin(this.value);
        this.value = this.value * this.value;
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var v1 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
console.log(v1);
