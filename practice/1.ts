/*
export {};
const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? "크다" : "작다";

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
// values.push('a');

const data: [string, number] = [msg, size];
data[0].substr(1);
// data[1].substr(1);

console.log("typeof 123 =>", typeof 123);
console.log('typeof "abc" =>', typeof "abc");
console.log("typeof [1,2,3] =>", typeof [1, 2, 3]);
*/

/*
export {};
enum Fruit {
  Apple,
  Banana,
  Orange,
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana; 
*/

/*
export {};
enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}
console.log(Fruit.Banana);
console.log(Fruit["Banana"]);
console.log(Fruit[5]);
console.log(Fruit);
*/

/*
export {};
function getText(name: string, age: number): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name : ${nameText}, age: ${ageText}`;
}

// const v1: string = getText('mike', 23);
// const v2: string = getText('mike', '23');
// const v3: number = getText('mike', 23);
*/

/*
export {};
const getText: (name: string, age: number) => string = function (name, age) {
  return "";
};
*/

/*
export {};
function getText(name: string, age: number, language?: string): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substr(0, 10) : "";
  return `name : ${nameText}, age: ${ageText}, language: ${languageText}`;
}
getText('mike', 23, 'ko')
getText('mike', 23)
getText('mike', 23, 123)
*/

/*
function getParam(this: string, index: number): string {
  const params = this.split(",");
  if (index < 0 || params.length <= index) {
    return "";
  }
  return this.split(",")[index];
}

interface String {
  getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log("asdf, 1234, ok".getParam(1));
*/

/*
interface Object {
  getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function () {
  return Object.keys(this).filter((key) => key.length <= 3);
};

const obj = {
  a: 1,
  bb: 2,
  ccc: 3,
  dddd: 4,
};

console.log(obj.getShortKeys());
*/

/*
export {};

// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안 된다. 

function add(x:number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") return x + y;
  else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

const v1: number = add(1,2);
console.log(add(1, '2'))
*/

/*
export {};

function add(x:number, y: number): number;
function add(x:string, y: string): string;
function add(x:number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

const v1: number = add(1,2);
console.log(add(1, '2'));
*/

/*
export {};

function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
*/

/*
export {};

interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText({ name, age = 15, language }: Param): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
*/

/*
function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
*/

/*
export {}
interface Person {
  name: string,
  age: number
}

const p1: Person = {name: 'mike', age: 23};
const p2: Person = {name: 'mike', age: 'ten'}
*/

/*
export {};

interface Person {
  name: string;
  age?: number;
}

const p1: Person = { name: "mike" };
*/

/*
export {};

interface Person {
  readonly name: string;
  age?: number;
}

const p1: Person = { name: "mike" };
p1.name = 'joe';
*/

/*
export {};

interface Person {
  readonly name: string;
  age?: number;
}

// const p1: Person = {
//   name: "mike",
//   birthday: '1997-01-01'
// };
const p2 = {
  name: "mike",
  birthday: "1997-01-01",
};
const p3: Person = p2;
console.log(p3);
 */

/*
export {};
interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
yearMap[1998] = "abc";
yearMap["2000"] = 1234;
yearMap["2000a"] = "million";
*/

/*
export {};

interface GetText {
  (name: string, age: number): string;
}
// type GetText = (name: string, age: number) => string;
const getText: GetText = function (name, age) {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}`;
};
*/

/*
export {};

interface GetText {
  (name: string, age: number): string;
  totalCall?: number;
}

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefined) {
    getText.totalCall += 1;
    console.log(`totalCall: ${getText.totalCall}`);
  }
  return "";
};

getText("", 0);
getText.totalCall = 0;
getText("", 0);
getText("", 0);
*/

/*
export {};

interface Person {
  name: string;
  age: number;
  isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isYoungerThan(age: number) {
    return this.age < age;
  }
}
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  isLiveInSeoul: boolean;
}


// interface Korean {
//   name: string;
//   age: number;
//   inLiveInSeoul: boolean;
// }
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Programmer {
  favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer {
  isLiveInSeoul: boolean;
}
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

type PP = Person & Product;
const pp: PP = {
  name: "a",
  age: 23,
  price: 1000,
};
*/

/*
export {};

class Person {
  name: string;
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("안녕하세요");
  }
}
*/

/*
export {};

class Person {
  sayHello() {
    console.log("안녕하세요");
  }
}

class Programmer extends Person {
  fixBug() {
    console.log("버그 수정 완료");
  }
}

const programmer = new Programmer();
programmer.fixBug();
programmer.sayHello();
*/

/*
export {};

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
  }
}

class Programmer extends Person {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    // super.sayHello();
    console.log("저는 프로그래머 입니다.");
  }
}

class Doctor extends Person {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    super.sayHello();
    console.log("저는 의사 입니다");
  }
}

const programmer = new Programmer("홍길동");
programmer.sayHello();
console.log(programmer.name);
const doctor: Person = new Doctor("홍길동");
doctor.sayHello();
*/

/*
export {};

class Person {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  sayHello() {
    console.log(`안녕하세요 저는 ${this.#name} 입니다`);
  }
}

const person = new Person('홍길동');
console.log(person.#name);
*/

/*
export {};

class Person {
  protected name: string;
  protected  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
  }
}

const person = new Person('홍길동');
console.log(person.name);
*/

/*
export {};

class Person {
  readonly name: string;
  private readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('홍길동', 23);
person.name = '김삿갓'
*/

/*
class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person("홍길동", 23);
console.log(person.name, person.age);
*/

/*
export {};

class Person {
  private _name: string = "";

  get name(): string {
    console.log("getter called");
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 10) {
      throw new Error("최대 길이를 넘었습니다.");
    }
    this._name = newName;
  }
}

let person = new Person();
person.name = "홍길동";
console.log(person.name);
person.name = "asdf asdf asdf";
*/

/*
export {};

class Person {
  static adultAge = 20;
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
    console.log(
      Person.getIsAdult(this.age) ? "저는 성인이 아닙니다." : "저는 성인입니다"
    );
  }
  static getIsAdult(age: number) {
    return Person.adultAge >= age;
  }
}

const person = new Person("홍길동", 23);
person.sayHello();
console.log(`성인 판단 기준 나이: ${Person.adultAge}`);
*/

/*
export {};

abstract class Person {
  constructor(public name: string) {}
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`);
  }
  abstract sayHello2(): void;
}

class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log("저는 프로그래머 입니다.");
  }
  sayHello2() {
    console.log("반갑습니다! 저는 프로그래머 입니다.");
  }
}
*/

/*
export {};

function func1(a: number, b:number | string) {
  const v1: number | string = a;
  const v2: number = b;
}

function func2(a: 1 | 2) {
  const v1: 1 | 3 = a;
  const v2: 1 | 2 | 3 = a;
}
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  age: number;
}

const person: Person = { name: "mike", age: 23 };
const product: Product = person;
*/

/*
export {};

interface Person {
  name: string;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: "mike", age: "23", city: "abc" }; 
const person: Person = obj;
const product: Product = obj;
*/

/*
export {};

interface Person {
  name: string;
  age?: number;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: "mike" };
const person: Person = obj;
const product: Product = obj;
*/

/*
export {}

interface Person {
  name: string;
  age: number;
  gender: string;
}

interface Product {
  name: string;
  age: number | string;
}

const person: Person = {
  name: 'mike',
  age: 23,
  gender: 'male'
}

const product: Product = person;
*/

/**
 * 다음은 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건이다.
 * 1.  A의 매개변수 개수가 B의 매개변수 개수보다 적어야 한다.
 * 2.  같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
 * 3.  A의 반환값은 B의 반환값으로 할당 가능해야 한다.
 */

/*
type F1 = (a: number, b: string) => string;
type F2 = (a: number, b: string | number) => string;
type F3 = (a: number) => string;
type F4 = (a: number) => number | string;

let f1: F1 = (a, b) => `${a} ${b.length}`;
let f2: F2 = (a, b) => `${a} ${b}`;
let f3: F3 = (a) => `${a}`;
let f4: F4 = (a) => (a < 10 ? a : "too big");

f1 = f3;
f3 = f1;
f3(1)
f1 = f2;
// f2 = f1;

f4 = f3;
// f3 = f4; 
*/

/*
export {};

function makeNumberArray(defaultValue: number, size: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

function makeStringArray(defaultValue: string, size: number): string[] {
  const arr: string[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeNumberArray(1, 10);
const arr2 = makeStringArray("empty", 10);
*/

/*
export {};

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];

function makeArray(
  defaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray(1, 10);
const arr2 = makeArray("empty", 10);
*/

/*
export {};

function makeArray<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("empty", 10);
const arr3 = makeArray(1, 10);
const arr4 = makeArray("empty", 10);
const arr5 = makeArray(true, 10);
*/

/*
export {};

class Stack<D> {
  private items: D[] = [];
  push(item: D) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();
const stringStack = new Stack<string>();
stringStack.push('a');
const v2 = stringStack.pop();

let myStack: Stack<number>;
myStack = numberStack;
myStack = stringStack;
*/

/*
export {};

function identity<T extends number | string> (p1: T): T {
  return p1;
}

identity(1);
identity('a');
identity([]);
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};
const p2: Korean = {
  name: "김삿갓",
  age: 31,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age");
*/

/*
export {};

type T1 = { [K in "prop1" | "prop2"]: boolean };
*/

/*
interface Person {
  name: string;
  age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;
*/

/*
export {};

interface Person {
  name: string;
  age?: number;
}

type T1 = Person["name"];
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Partial<T> = { [P in keyof T]?: T[P] };
type T2 = Partial<Person>;
type T3 = Readonly<Person>;
*/

/*
export {};

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

interface Person {
  name: string;
  age: number;
  language: string;
}

type T1 = Pick<Person, "name" | "language">;
*/

/*
export {};

interface Person {
  name: string;
  age: number;
  language: string;
}

type Record<K extends string, T> = {[P in K]: T};
type T1 = Record<'p1'|'p2', Person>;
*/

/*
export {};

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
*/

/*
export {};

type IsStringType<T> = T extends string ? 'yes' : 'no';
type T1 = IsStringType<string | number>;
type T2 = IsStringType<string> | IsStringType<number>;

type Array2<T> = Array<T>;
type T3 = Array2<string | number>;
*/

/*
export {};

type T1 = number | string | never;
type Exclude<T, U> = T extends U ? never : T;
type T2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>;
type T3 = Exclude<string | number | (() => void), Function>;
type Extract<T, U> = T extends U ? T : never;
type T4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>;
*/

/*
export {};

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>;
function f1(s: string): number {
  return s.length;
}

type T2 = ReturnType<typeof f1>;
*/

/*
export {};

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;
type T2 = Unpacked<() => string>;
type T3 = Unpacked<Promise<string>>;
type T4 = Unpacked<Promise<string>[]>;
type T5 = Unpacked<Unpacked<Promise<string>[]>>;
*/

/*
export {};

type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T1 = StringPropertyNames<Person>;
type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>;
*/

/*
export {};

type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T1 = Omit<Person, "nation" | "age">;
*/

/*
export {};

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

interface Person {
  name: string;
  age: number;
}

type T1 = Overwrite<Person, { age: string; nation: string }>;
const p: T1 = {
  name: "mike",
  age: "23",
  nation: "korea",
};
*/

/*
export {};
interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

type PP = Person & Product;

const pp: PP = {
  name: "gd",
  age: 1,
  price: 1000,
};
*/

/*
export {};

let v1 = 123;
let v2 = 'abc';
v1 = 'a';
v2 = 456;
*/

/*
export {};
const v1 = 123;
const v2 = 'abc'
let v3: typeof v1 = 234;
*/

/*
export {};

const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
arr1.push('a');

const obj = {id: 'abcd', age:123, language: 'korean'};
const {id, age, language} = obj;
console.log(id === age);
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

interface Japanese extends Person {
  liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "mike", age: 23, liveInSeoul: true };
const p3: Japanese = { name: "mike", age: 23, liveInTokyo: false };
const arr1 = [p1, p2, p3];
const arr2 = [p2, p3];
*/

/*
export {};

function func1(a: number | string = "abc", b = 10) {
  return `${a} ${b};`;
}

func1(3, 6);
const v1: number = func1("a", 1);

function func2(value: number) {
  if (value < 10) {
    return value;
  } else {
    return `${value} is too big`;
  }
}
*/

/*
export {};

function print(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value.trim());
  }
}
*/
/*
export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
*/

/*
export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if (value instanceof Person) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
*/

/*
export {};

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}
interface Product2 {
  type: "c";
  name: string;
  price2: number;
}

function print(value: Person | Product) {
  if (value.type === "a") {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
function print2(value: Person | Product | Product2) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
      break;
  }
}
*/

/*
export {};
interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function isPerson(x: Person | Product): x is Person {
  return (x as Person).age !== undefined;
}

function print(value: Person | Product) {
  if (isPerson(value)) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
*/
