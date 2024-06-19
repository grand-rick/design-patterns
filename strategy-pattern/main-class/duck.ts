import { FlyBehavior } from "../behaviors/fly.behavior";
import { QuackBehavior } from "../behaviors/quack.behavior";

export class Duck {
  flyBehavior: FlyBehavior | undefined;
  quackBehavior: QuackBehavior | undefined;

  swim(): void {
    console.log("swimming");
  }

  display(): void {}

  performFly(): void {
    this.flyBehavior?.fly();
  }

  performQuack(): void {
    this.quackBehavior?.quack();
  }

  setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}
