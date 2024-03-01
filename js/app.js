// create variables that will be outside our function and need to be called on whenever
const playerOne = {
  hitpoints: 100,
  currentWeapon: {
    name: "Bronze knife",
    accuarcy: 1,
    damage: 5,
  },
  gold: 50,
}

const playerTwo = {
  hitpoints: 100,
  currentWeapon: {
    name: "Bronze knife",
    accuarcy: 1,
    damage: 5,
  },
  gold: 50,
}

const items = [
  {
    name: "Steel sword",
    accuarcy: .80,
    damage: 10,
    cost: 100,
  },
  {
    name: "Rune 2h",
    accuarcy: .50,
    damage: 40,
    cost: 500,
  },
  {
    name: "Magic bow",
    accuarcy: 1,
    damage: 10,
    cost: 200
  },
  {
    name: "Fire staff",
    accuarcy: .80,
    damage: 30,
    cost: 700,
  },
  {
    name: "Dragon claws",
    accuarcy: 1,
    damage: 80,
    cost: 2000,
  },
  {
    name: "Armadyl God Sword",
    accuarcy: .80,
    damage: 100,
    cost: 3000,
  }
]


// Create the onload function


// create the game loop to set to make the game turn based

// Game loop consists of functions that will allow the players to choose how to spend their time before facing off against the final boss.

  // FUNCTIONS:
    // Shop ()
        // to buy a different weapon
const steelSword = (player) => {
  if (player.gold >= items[0].cost) {
    player.currentWeapon = items[0]
    player.gold -= items[0].cost
    console.log(player.currentWeapon)
  }
}

    // Kill Goblin ()
        // To get gold coins 
const killGoblin = (player) => {
  player.gold = player.gold + 10
  console.log(player.gold)
}
    // maybe make seperate buttons for each player if the above () doesnt work.
    // It works for one player if you add the parameters for the specified player.
    // Next need to link to a button for each player.
        // killGoblin button working
    



    // Challenge Boss ()
    // Attack game loop 
        // start with player 1 attack ()
        // after plauer 2 attacks then activate boss attack () which attacks both players.

// make the functions and attach them to the buttons to allow players to perform functions within the game loop


