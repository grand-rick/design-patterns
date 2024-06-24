## DECORATOR PATTERN

> _**Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality**_

### UML Diagram

![Decorator Pattern UML Diagram](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ionos.ca%2Fdigitalguide%2Ffileadmin%2FDigitalGuide%2FSchaubilder%2Fgraphic-depiction-of-the-decorator-pattern.png&f=1&nofb=1&ipt=1c3e6a9ff8e7a228c51ae51684ce31b64c26bb1164a26c24a18d0090e9d89ea1&ipo=images)

### Participants

- **Base Component**: Defines the interface for objects that can have responsibilities added to them dynamically.
- **ConcreteComponent**: Defines an object to which additional responsibilities can be attached.
- **Decorator**: Maintains a reference to a Component object and defines an interface that conforms to Component's interface.
- **ConcreteDecorator**: Adds responsibilities to the component.

### When to use the Decorator Pattern

- To add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
- For responsibilities that can be withdrawn.
- When extension by subclassing is impractical. Sometimes a large number of independent extensions are possible and would produce an explosion of subclasses to support every combination. Or a class definition may be hidden or otherwise unavailable for subclassing.

### Pros

- More flexibility than static inheritance.
- Avoids feature-laden classes high up in the hierarchy.
- A decorator and its component aren't tightly coupled.
- Can add functionality to individual objects at runtime.

### Cons

- A lot of small objects can be overwhelming.
- Often used with other patterns such as Factory and Builder.
- Can lead to a system with a large number of small objects that look similar but are actually different.

### Example

Check the `src` directory for the implementation of the observer pattern in TypeScript.

> To run the main file (src/index.ts) and see the output, run `ts-node src/index.ts` in your terminal.
>
> > **N/B**: You must have `ts-node` installed globally to run the command above. If you don't have it installed, you can install it by running `npm install -g ts-node`.
