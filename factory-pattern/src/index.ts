import { Pizza } from "./interfaces";
import { ChicagoPizzaStore, NYPizzaStore } from "./sub-classes";

const nyStore = new NYPizzaStore();
let pizza: Pizza = nyStore.orderPizza("cheese");

console.log(`Ethan ordered a ${pizza.getName()}`);

const chicagoStore = new ChicagoPizzaStore();
pizza = chicagoStore.orderPizza("cheese");

console.log(`Joel ordered a ${pizza.getName()}`);
