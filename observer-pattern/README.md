## OBSERVER PATTERN

> _**Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically**_

### UML Diagram

![Observer Pattern UML Diagram](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GbNqa6O70REmzGGqWCvQpQHaDn%26pid%3DApi&f=1&ipt=55879d35399185329c2c567507270e36633126dda982c75d9c9ffb508f705773&ipo=images)

### Participants

- **Subject**: The Subject interface declares a set of methods for managing subscribers.
- **ConcreteSubject**: The ConcreteSubject class is responsible for storing the state of interest to ConcreteObserver objects and sending notifications to observers in the observer pattern.
- **Observer**: The Observer interface declares the update method, which is called by the subject.
- **ConcreteObserver**: The ConcreteObserver class implements the Observer interface and stores a reference to the ConcreteSubject object. ConcreteObserver's update method is called by the subject when the state of the subject changes.

### When to use the Observer Pattern

- When a change to one object requires changing others, and you don't know how many objects need to be changed.
- When an object should be able to notify other objects without making assumptions about who these objects are.
- When an object should be able to notify other objects without knowing the details of the objects.

### Pros

- **Open/Closed Principle**: You can introduce new subscriber classes without having to change the publisher's code (and vice versa if there's a publisher interface).
- **Single Responsibility Principle**: You can segregate the publisher and the subscriber into two classes.
- **Liskov Substitution Principle**: You can introduce new subscriber classes without breaking the existing publisher's code.
- **Interface Segregation Principle**: You can introduce new subscriber classes without changing the publisher's interface.
- **Dependency Inversion Principle**: You can refer to the abstract publisher interface instead of specific publisher classes.

### Cons

- Subscribers are notified in random order\*.
- The publisher may continue to send updates to subscribers that are no longer interested in receiving them.
- The publisher may send updates to subscribers that are in an inconsistent state.
- The publisher may send updates to subscribers that are no longer in memory.

### Example

Check the `src` directory for the implementation of the observer pattern in TypeScript.

> To run the main file (src/index.ts) and see the output, run `ts-node src/index.ts` in your terminal.
>
> > **N/B**: You must have `ts-node` installed globally to run the command above. If you don't have it installed, you can install it by running `npm install -g ts-node`.
