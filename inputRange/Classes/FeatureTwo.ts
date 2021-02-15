import {Calculate} from "../Interfaces/Calculate";
import {Feature} from "./Feature";

export class FeatureTwo extends Feature implements Calculate {
    constructor(cost: number) {
        super(cost);
        this.amount = parseInt((document.getElementById('myRange') as HTMLInputElement).value);
    }

    calculate(): number {
        let total;
        if(this.amount <= 10) {
            total = this.cost * this.amount;
        } else {
            total = this.cost * this.amount * .8;
        }
        return total;
    }
}