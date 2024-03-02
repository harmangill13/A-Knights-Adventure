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

const boss = {
  name: "Crota",
  hitpoints: 300,
  accuarcy: .50,
  damage: 25,
}

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
  } else {
    alert("You don't have enough gold")
  }
}

const rune2H = (player) => {
  if (player.gold >= items[1].cost) {
    player.currentWeapon = items[1]
    player.gold -= items[1].cost
    console.log(player.currentWeapon)
  } else {
    alert("You don't have enough gold")
  }
}

const magicBow = (player) => {
  if (player.gold >= items[2].cost) {
    player.currentWeapon = items[2]
    player.gold -= items[2].cost
    console.log(player.currentWeapon)
  } else {
    alert("You don't have enough gold")
  }
}

const fireStaff = (player) => {
  if (player.gold >= items[3].cost) {
    player.currentWeapon = items[3]
    player.gold -= items[3].cost
    console.log(player.currentWeapon)
  } else {
    alert("You don't have enough gold")
  }
}

const dragonClaws = (player) => {
  if (player.gold >= items[4].cost) {
    player.currentWeapon = items[4]
    player.gold -= items[4].cost
    console.log(player.currentWeapon)
  } else {
    alert("You don't have enough gold")
  }
}

const armadylGodSword = (player) => {
  if (player.gold >= items[5].cost) {
    player.currentWeapon = items[5]
    player.gold -= items[5].cost
    console.log(player.currentWeapon)
  } else {
    alert("You don't have enough gold")
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
const fightBoss = () => {
  alert ("Player one Attacks first, then player two, Crota will attack both players simultaneously")
  document.getElementById("player2").addEventListener("click", bossAttack)
}

const bossAttack = () => {
  document.getElementById("player2").addEventListener("click", bossAttack)
  if (playerOne.hitpoints && playerTwo.hitpoints <= 0) {
    alert ("YOU LOSE")
  } else if (boss.accuarcy >= Math.floor(Math.random())){
    playerOne.hitpoints = playerOne.hitpoints - boss.damage
    playerTwo.hitpoints = playerTwo.hitpoints - boss.damage
    console.log(playerOne.hitpoints && playerTwo.hitpoints)
  } else {
    alert ("You dodged Crota's attack")
  }
}
const attack = (player) => {
  const randomNum = Math.random(Math.random())
  console.log(randomNum)

  if (boss.hitpoints <= 0) {
    alert ("You Win!")
  } else if (playerOne.hitpoints <= 0 && playerTwo.hitpoints <=0) {
    alert ("You lose")
  } else { 
    if (player.currentWeapon.accuarcy >= randomNum) {
      boss.hitpoints = boss.hitpoints - player.currentWeapon.damage
      console.log("Crota has", + boss.hitpoints + " remaining")
    
    } else {
      alert ("Crota dodged your attack")
      console.log("Crota has", + boss.hitpoints + " remaining")
    }
  }
}
// make the functions and attach them to the buttons to allow players to perform functions within the game loop
  // try hidding player 2 buttons until player one clicks their button then block the "display: none" for player 2 and go to blocking player one.
  // This could be a way to switch turns 