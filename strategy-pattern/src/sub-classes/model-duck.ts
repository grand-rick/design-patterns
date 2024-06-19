import { Duck } from "../../main-class/duck";
import { FlyNoWay } from "../../behaviors/fly.behavior";
import { Quack } from "../../behaviors/quack.behavior";

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("I'm a model Duck!");
  }
}
