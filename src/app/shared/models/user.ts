import { lnstitution } from "./lnstitution.model";
import { parent } from "./parent.model";

export class User {
    constructor(
        public parent: parent,
        public lnstitution: lnstitution) { }
}