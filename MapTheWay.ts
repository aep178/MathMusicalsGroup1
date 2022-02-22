
NOT COMPLETE CODE YET

Minigame 1 -> Map The Way
Map the Way is a game about Newton and Decarte trying to find their way to the talent show. 
They will look at a map made up of a bunch of quadrilaterals and they will be given hints about the quadrilaterals to find their way to the talent show. 
The victory condition of this game is the player successfully deciphering the hints and locating the talent show.

Mechanic:
0) The game will randomly pick a starting point on the map. With time as a factor, the map may or may not change from game to game. 
      (Maybe have a few non changing maps and the game picks one when it starts?)
1) Each turn, the game randomly generates a number from 1 to n (based on now many streets are in the map)
2) The game gives the player some type of hint, such as "Then we need to go along the left side of the trapazoid"
3) The player must pick the street that the game is referring to.
4) Vicotry is acchieved when the player has successfully navigated from the starting point to the finish point. (likely 3-4 correct answers)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} //random number generator

//table 1
function Maps() {
let shapes = getRandomInt(4);

let paths = getRandomInt(m);

let roads = getRandomInt(4);

if (shapes = 0) {
	//map shape 1
	}

	if (shapes = 1) {
	//map shape 2
	}

	if (shapes = 2) {
	//map shape 3
	}

	else {
	//map shape 4
	}

	
}
             
//table 2
function Pathways() {
	if (paths = 0) {
	//pathway 1
	}

	if (paths = 1) {
	//pathway 2
	}

	if (paths = 2) {
	//pathway 3
	}

	if (paths = 3) {
	//pathway 4
	}

	if (roads = 0) {
	//roadway 1
	}

	if (roads = 1) {
	//roadway 2
	}

	if (roads = 2) {
	//roadway 3
	}
	
	if (roads = 3) {
	//roadway 4
	}

function hint(hint(map#,path#,Counter){
      //The whole purpose of this function is to now what hint to call when. 
            if (paths = 1){
                  if (counter = 1){
                        .....
                  }else (counter = 2){
                  .....
      }else if (map = 2){
      .....
      .....
}

function main (null){
      let [4] shapes = path<map#><path#>[2][3][4][5];
      let [4] roads = path<map#><path#>[6][7][8][9];
      let "correct" = false;
      let correctCount = 0;
      
      while (correctcount < 4){
            correct = false;
      
            if (correct count = 0){
                  hint(map#,path#,Counter);
                  if(click correct road){
                        correct = TRUE; Count + 1;
                   else break;
                   
            }else (correct count = 1){
                  hint(map#,path#,Counter);
                  if(click correct road){
                        correct = TRUE; Count + 1;
                   else break;
                   
            }else if (correct count = 2){
                  hint(map#,path#,Counter);
                  if(click correct road){
                        correct = TRUE; Count = + 1;
                   else break;
                   
            }else if (correct count == 3){
                  hint(map#,path#,Counter);
                  if(click correct road){
                        correct = TRUE; Count + 1;
                   else break;
                   
            }else{ ERROR EXIT}
            
            if(correct = false){
                  sorry, that was the wrong answer}
            else ignore;
      }
      
      function UnlockNextGame(){
}
      function GameExit(){
}   
}
	


