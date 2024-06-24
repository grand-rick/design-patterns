enum Size {
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
export abstract class Beverage {
  description: string = "Unknown Beverage";
  size: Size = Size.TALL;

  getDescription(): string {
    return this.description;
  }

  setSize(size: Size) {
    this.size = size;
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
}
