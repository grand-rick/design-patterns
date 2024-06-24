import { Beverage } from "./base-class/base";
import { DarkRoast, Espresso, HouseBlend } from "./beverages/beverages";
import { Mocha, Soy, Whip } from "./condiments/condiments";
import { Size } from "./base-class/base";

let TALL = Size.TALL;
let GRANDE = Size.GRANDE;
let VENTI = Size.VENTI;

let beverage: Beverage = new Espresso().setSize(GRANDE);
beverage = new Mocha(beverage);

console.log(`${beverage.getDescription()} $${beverage.cost()}`);

// Output
// Espresso $1.99

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

// Output
// Dark Roast Coffee, Mocha, Mocha, Whip $1.49

let beverage3 = new HouseBlend();
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
beverage3 = new Soy(beverage3);

console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);

// Output
// House Blend Coffee, Mocha, Whip, Soy $1.34
