## FACTORY PATTERN

The Factory Method Pattern is a creational pattern that defines an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### Participants

- **Creator**: The Creator class declares the factory method, which returns an object of type Product. The Creator class may also define a default implementation of the factory method that returns a default type of Product.

- **ConcreteCreator**: The ConcreteCreator class overrides the factory method to return an object of type ConcreteProduct.

- **Product**: The Product interface declares the operations that all concrete products must implement.

- **ConcreteProduct**: The ConcreteProduct class implements the Product interface.

> #### Creator Classes
>
> ![Creator Classes](https://res.cloudinary.com/dv765kdgq/image/upload/v1719501724/f0131-01_ushuko.png)

> #### Product Classes
>
> ![Product Classes](https://res.cloudinary.com/dv765kdgq/image/upload/v1719501679/f0131-02_vtxk4t.png)

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
