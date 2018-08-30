class DiceSet {
    // You have a `DiceSet` class which has a list for 6 dices
    // You can roll all of them with roll()
    // Check the current rolled numbers with getCurrent()
    // You can reroll with reroll()
    // Your task is to roll the dices until all of the dices are 6
    dices: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dices = [];
        for (var i = 0; i < this.numOfDices; i++) {
            this.dices.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dices;
    }

    reroll(index?: number) {
        if (index == undefined) {
            for (var i = 0; i < this.numOfDices; i++) {
                this.dices[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dices[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index?: number) {
        if (index == undefined) {
            for (var i = 0; i < this.numOfDices; i++) {
                console.log(this.dices[i]);
            }
        } else {
            console.log(this.dices[index]);
        }
    }
}

let diceSet: DiceSet = new DiceSet();

function checkDices(dice): boolean {
    return dice === 6;
}

diceSet.roll();
while (!diceSet.dices.every(checkDices)) {
    if (diceSet.dices[0] !== 6) {
        diceSet.reroll(0);
    }
    else if (diceSet.dices[1] !== 6) {
        diceSet.reroll(1);
    }
    else if (diceSet.dices[2] !== 6) {
        diceSet.reroll(2);
    }
    else if (diceSet.dices[3] !== 6) {
        diceSet.reroll(3);
    }
    else if (diceSet.dices[4] !== 6) {
        diceSet.reroll(4);
    }
    else if (diceSet.dices[5] !== 6) {
        diceSet.reroll(5);
    }
    if (diceSet.dices.every(checkDices)) {
        diceSet.getCurrent();
    }
}