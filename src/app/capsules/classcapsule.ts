import { Class } from "../models/class";

export class ClassCapsule {
    class?: Class;

    constructor (c?: Class) {
        this.class = c;
    }

    put(c: Class) {
        this.class = c;
    }

    hasSomething(): boolean {
        return this.class != undefined;
    }

    get() {
        return this.class;
    }
}