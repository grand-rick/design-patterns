import { Beverage } from "../base-class/base";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  cost(): number {
    return 0.99;
  }
}

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }

  cost(): number {
    return 1.05;
  }
}
