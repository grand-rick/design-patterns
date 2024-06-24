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
    let cost = this.beverage.cost();

    switch (this.beverage.getSize()) {
      case "TALL":
        cost += 0.1;
        break;
      case "GRANDE":
        cost += 0.15;
        break;
      case "VENTI":
        cost += 0.2;
        break;
    }

    return cost;
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
    let cost = this.beverage.cost();

    switch (this.beverage.getSize()) {
      case "TALL":
        cost += 0.15;
        break;
      case "GRANDE":
        cost += 0.2;
        break;
      case "VENTI":
        cost += 0.25;
        break;
    }

    return cost;
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
    let cost = this.beverage.cost();

    switch (this.beverage.getSize()) {
      case "TALL":
        cost += 0.1;
        break;
      case "GRANDE":
        cost += 0.15;
        break;
      case "VENTI":
        cost += 0.2;
        break;
    }

    return cost;
  }
}
