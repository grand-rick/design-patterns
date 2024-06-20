## STRATEGY PATTERN

> The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### When to use the strategy pattern?

- When you want to define a class that will have one behavior that is similar to other behaviors in a list
- When you need to use one of several behaviors dynamically
- When you want to change the behavior of an object at runtime

### Strategy Pattern UML Diagram

![strategy-pattern](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2Fboxi3.jpg&f=1&nofb=1&ipt=3502ab5a0094d14ac510052f4debd111c097e66c717e56e724e251e85a780249&ipo=images)

### Example

```typescript
interface Strategy {
  execute(a: number, b: number): number;
}

class Add implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Subtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class Multiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

const context = new Context(new Add());
console.log("Add: " + context.executeStrategy(10, 5));

context = new Context(new Subtract());

console.log("Subtract: " + context.executeStrategy(10, 5));

context = new Context(new Multiply());

console.log("Multiply: " + context.executeStrategy(10, 5));
```

### Output

```bash
Add: 15
Subtract: 5
Multiply: 50
```

### Resources

- https://en.wikipedia.org/wiki/Strategy_pattern
- https://refactoring.guru/design-patterns/strategy
- https://www.dofactory.com/javascript/design-patterns/strategy
- https://www.geeksforgeeks.org/strategy-pattern-set-1/

### Implementation

- Define a strategy interface with a method that will be implemented by concrete strategies
- Implement concrete strategies that implement the strategy interface
- Define a context class that will use the strategy
- In the context class, add a method that will set the strategy
- In the context class, add a method that will execute the strategy
- Create an instance of the context class and pass a concrete strategy to it
- Call the method that will execute the strategy

For more code snippets, check the code in the `src` folder.

> To run the main file (src/index.ts) and see the output, run `ts-node src/index.ts` in your terminal.
>
> > **N/B**: You must have `ts-node` installed globally to run the command above. If you don't have it installed, you can install it by running `npm install -g ts-node`.
