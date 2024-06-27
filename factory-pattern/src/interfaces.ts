export abstract class Pizza {
  name: string = "";
  dough: string = "";
  sauce: string = "";
  toppings: string[] = [];

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Tossing dough...`);
    console.log(`Adding sauce...`);
    console.log(`Adding toppings: ${this.toppings.join(", ")}`);
  }

  bake(): void {
    console.log(`Baking for 25 minutes at 350`);
  }

  cut(): void {
    console.log(`Cutting the pizza into diagonal slices`);
  }

  box(): void {
    console.log(`Placing pizza in official PizzaStore box`);
  }

  getName(): string {
    return this.name;
  }
}

export class NYCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Cheese Pizza";
    this.dough = "Thin Crust";
    this.sauce = "Marinara";
    this.toppings.push("Grated Reggiano Cheese");
  }
}

export class NYPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Pepperoni Pizza";
    this.dough = "Thin Crust";
    this.sauce = "Marinara";
    this.toppings.push("Grated Reggiano Cheese");
    this.toppings.push("Sliced Pepperoni");
    this.toppings.push("Garlic");
    this.toppings.push("Onion");
    this.toppings.push("Mushrooms");
    this.toppings.push("Red Pepper");
  }
}

export class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Cheese Pizza";
    this.dough = "Thick Crust";
    this.sauce = "Plum Tomato";
    this.toppings.push("Shredded Mozzarella Cheese");
  }
}

export class ChicagoPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Pepperoni Pizza";
    this.dough = "Thick Crust";
    this.sauce = "Plum Tomato";
    this.toppings.push("Shredded Mozzarella Cheese");
    this.toppings.push("Sliced Pepperoni");
    this.toppings.push("Garlic");
    this.toppings.push("Onion");
    this.toppings.push("Mushrooms");
    this.toppings.push("Red Pepper");
  }
}

export class CaliforniaCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "California Cheese Pizza";
    this.dough = "Thin Crust";
    this.sauce = "BBQ";
    this.toppings.push("Shredded Mozzarella Cheese");
  }
}

export class CaliforniaPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "California Pepperoni Pizza";
    this.dough = "Thin Crust";
    this.sauce = "BBQ";
    this.toppings.push("Shredded Mozzarella Cheese");
    this.toppings.push("Sliced Pepperoni");
    this.toppings.push("Garlic");
    this.toppings.push("Onion");
    this.toppings.push("Mushrooms");
    this.toppings.push("Red Pepper");
  }
}
