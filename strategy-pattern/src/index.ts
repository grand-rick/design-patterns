import { FlyRocketPowered } from "./behaviors/fly.behavior";
import { Duck } from "./main-class/duck";
import { MallardDuck } from "./sub-classes/mallard-duck";
import { ModelDuck } from "./sub-classes/model-duck";

const mallard: Duck = new MallardDuck();

mallard.performFly();
mallard.performQuack();

const model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
