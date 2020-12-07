import { greet, sayHello } from './data/greeter';

export class Index {

    init() {
        console.log("I'm the entry point");
        greet()
    }

    clickHello() {
        sayHello()
    }
}
