import { Pizza } from "./interfaces";

export abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
  protected abstract createPizza(type: string): Pizza;
}
