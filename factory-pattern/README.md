## FACTORY PATTERN

The Factory Method Pattern is a creational pattern that defines an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### UML Diagram

![Factory Pattern Image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oodesign.com%2Fimages%2Fstories%2Ffactory%2520method%2520example%2520-%2520uml%2520class%2520diagram.gif&f=1&nofb=1&ipt=2a773821ab63d7765d2ea538edb4edcc4db9164a92a0a76242c39aeff75f9d94&ipo=images)

### Pros

- **Single Responsibility Principle**: The Factory Method Pattern allows you to encapsulate the creation of objects. This means that the Factory Method Pattern can help you adhere to the Single Responsibility Principle, which states that a class should have only one reason to change.

- **Open/Closed Principle**: The Factory Method Pattern can help you adhere to the Open/Closed Principle, which states that a class should be open for extension but closed for modification. This means that you can add new products to your application without modifying existing code.

- **Code Reusability**: The Factory Method Pattern can help you reuse code by allowing you to create new objects without duplicating code.

### Cons

- **Complexity**: The Factory Method Pattern can introduce complexity to your codebase, especially if you have many different types of products.

- **Duplication**: The Factory Method Pattern can lead to duplication of code if you have many different factories that create similar products.

### When to use the Factory Method Pattern

- When you want to encapsulate the creation of objects.

- When you want to adhere to the Single Responsibility Principle.

- When you want to adhere to the Open/Closed Principle.

- When you want to reuse code by creating new objects without duplicating code.

### Example

Check out the [src](./src) directory for an example of the Factory Method Pattern in action.

### Resources

- [Factory Method Pattern - oodesign.com](https://www.oodesign.com/factory-method-pattern.html)

- [Factory Method Pattern - sourcemaking.com](https://sourcemaking.com/design_patterns/factory_method)
