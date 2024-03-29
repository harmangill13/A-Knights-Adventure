URL: https://65ebf91fc99fd95fce5662a8--storied-pegasus-d0ebd2.netlify.app/
Project Explanation:
A knights adventure is a single player or two player game meant to give the user the RPG experience where they can face off against goblins, earn gold, buy new gear, and test their skills against bosses. As a programmar, I enjoy playing different types of games and when tasked to make one myself, I wanted to create a fun game based around games I've played in the past. 

See here for wireframe: IMG_2274.jpg

Technologies and Approaches:
When I thought about the game I was going to make I went straight to pseudo coding what I need for this game and breaking those into more detail on how to get there. I first looked at what objects and variables will I need access too for this game (characters, items, boss). After my initial pseudo coding I focused on getting started with basic css and html to get my thoughts organized once making buttons and setting them to functions. When it came to making functions I started with simple functions for the game loop and then progressively tackled the more difficult ones. I start with the killGoblin() to earn gold, then proceeded to focus on using the gold to purchase items. I had to make sure after purchasing an item the character object was updated so I was trying the same method I used for my landscaper game but realized shift() is only applicable to an array. I ended up learning I could just set the object to the newly purchased object by simply listing the items index number. Proceeding through the game I had to add a fight mechanic that allowed players to attack the boss. My logic was to use the same function for both players and setting the buttons separetly with the parameters set for each button to a specific player. After this function I had to continue the game logic and made the boss attack the players. It was a little more difficult to do this as I tried to have the boss only attack once the second player attacked but becasue I used the same attack function for both players I set it so the boss responds to each attack. As I'm writing this, I think an if statement looking to see if the player == playerTwo would then allow the boss to attack only following playerTwo's attack. Lastly I needed to find a way to make the game turn based. I decided to create a function that would hide the buttons of the player who just pressed them and show the buttons of the next player turn. I realized that I couldn't do this because the functions I was using for each character were shared between both so I created a new button and set the onclick to the hideButton() and name it Pass turn indicating to players to pass turns. After this I went back to change the game slightly in different ways, one being a random gold amount being added from each goblin kill rather than the original set amount. 

Unsolved Problems:
- I wanted to created attack animations for when the players attacked the boss
- Looking down the road for future features, I wanted to make the game more of a single player game with keyboard bindings to allow for characters to move around the map. I wasn't able to figure out how to move characters.
- I wanted to add goblins to the map that were clickable and more interactive.
- I wasn't able to show a live updated of gold and hitpoints

Forthcoming feature:
- single player: character movement with keybindings
- character attack animations
- switching between different maps when the character would walk to the end of the road
- more mouse interactions with clickable objects (killing goblins, picking up items and adding them to the characters inventory, possibility to sell items to an NPC)
