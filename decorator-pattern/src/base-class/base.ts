export enum Size {
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
export abstract class Beverage {
  description: string = "Unknown Beverage";
  size: Size = Size.TALL;
  milkCost: number = 0.1;
  soyCost: number = 0.15;
  mochaCost: number = 0.2;
  whipCost: number = 0.1;

  getDescription(): string {
    return this.description;
  }

  hasMilk(): boolean {
    return false;
  }

  hasSoy(): boolean {
    return false;
  }

  hasMocha(): boolean {
    return false;
  }

  hasWhip(): boolean {
    return false;
  }

  setSize(size: Size): Beverage {
    this.size = size;
    return this;
  }

  getSize(): Size {
    return this.size;
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
  getSize(): Size {
    return this.beverage.getSize();
  }
}
