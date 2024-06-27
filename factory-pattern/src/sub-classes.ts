import { PizzaStore } from "./base";
import {
  Pizza,
  NYCheesePizza,
  NYPepperoniPizza,
  ChicagoCheesePizza,
  ChicagoPepperoniPizza,
  CaliforniaCheesePizza,
  CaliforniaPepperoniPizza,
} from "./interfaces";

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case "cheese":
        return new NYCheesePizza();
      case "pepperoni":
        return new NYPepperoniPizza();
      default:
        throw new Error("Invalid pizza type");
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case "cheese":
        return new ChicagoCheesePizza();
      case "pepperoni":
        return new ChicagoPepperoniPizza();
      default:
        throw new Error("Invalid pizza type");
    }
  }
}

export class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case "cheese":
        return new CaliforniaCheesePizza();
      case "pepperoni":
        return new CaliforniaPepperoniPizza();
      default:
        throw new Error("Invalid pizza type");
    }
  }
}
