import { Duck } from "../main-class/duck";
import { FlyWithWings } from "../behaviors/fly.behavior";
import { Quack } from "../behaviors/quack.behavior";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("Displaying as Mallard duck");
  }
}
