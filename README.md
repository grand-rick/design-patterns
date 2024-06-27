# Design Patterns 101

> This repository contains examples of design patterns in Typescript.

## OO basics

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance

## _OO Principles_

1. Encapsulate what varies
1. Favor composition over inheritance
1. Program to an interface, not an implementation
1. Strive for loosely coupled designs between objects that interact
1. Classes should be open for extension but closed for modification

## _Design Patterns_

1. [Strategy Pattern](./strategy-pattern/README.md)

   - Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
     ![Strategy Pattern Image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oodesign.com%2Fimages%2Fdesign_patterns%2Fbehavioral%2Fstrategy_implementation_-_uml_class_diagram.gif&f=1&nofb=1&ipt=47db11ecd30de699410d2b2a4428cc78c73d8c5b74b6bc38ed9aa83f46085974&ipo=images)

1. [Observer Pattern](./observer-pattern/README.md)
   - Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
     ![Observer Pattern Image](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcsis.pace.edu%2F~marchese%2FSE616_New%2FL7%2FL7_files%2Fimage020.png&f=1&nofb=1&ipt=71ec172ca79aae56a6f64aba6748493a7af8f9baf5e80f44154fef6986543bd5&ipo=images)
1. [Decorator Pattern](./decorator-pattern/README.md)
   - Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
     ![Decorator Pattern Image](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fintegu.net%2Fwp-content%2Fuploads%2F2020%2F11%2FDecorator-Pattern-Class-Diagram-UML-1024x576.png&f=1&nofb=1&ipt=cead7ea7bea729601e29863fefc3ea4e382b0381544b680069ac37e70259dd42&ipo=images)
1. [Factory Pattern](./factory-pattern/README.md)
   - Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
     ![Factory Pattern Image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oodesign.com%2Fimages%2Fstories%2Ffactory%2520method%2520implementation%2520-%2520uml%2520class%2520diagram.gif&f=1&nofb=1&ipt=a842c6aa368b7745dbf8c8d831ae66a679d629d02f9144ff4dafd037680d24fa&ipo=images)
