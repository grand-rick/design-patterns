export abstract class Beverage {
  description: string = "Unknown Beverage";

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  abstract getDescription(): string;
}
