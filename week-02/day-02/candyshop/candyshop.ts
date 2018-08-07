'use strict';
export { };

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(shopItems: any[]): string[] {
    let correctShopList: any[] = [];
    for (let element = 0; element < shopItems.length; element++) {
        if (element === 1) {
            correctShopList.push('Croissant');
        }
        else if (element === 3) {
            correctShopList.push('Ice cream');
        }
        else {
            correctShopList.push(shopItems[element]);
        }

    }
    return correctShopList;
}

console.log(sweets(shopItems));
export = sweets;