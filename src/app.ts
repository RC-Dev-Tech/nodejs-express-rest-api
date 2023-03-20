import { NetWork } from "./core/network"

export class App {
    run () {
      NetWork.getInstance().run();
    }
}