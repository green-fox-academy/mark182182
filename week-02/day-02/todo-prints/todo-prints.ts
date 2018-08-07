'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let myTodo: string = 'My todo:\n';
let withTodo: string = myTodo.concat(todoText);

let dlGames: string = ' - Download games\n';
let withdlGames: string = withTodo.concat(dlGames);
let diabloGame: string = '   - Diablo\n';
let withDiabloGames: string = withdlGames.concat(diabloGame);

console.log(withDiabloGames);