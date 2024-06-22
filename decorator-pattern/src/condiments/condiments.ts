import { Beverage, CondimentDecorator } from "../base-class/base";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`;
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
