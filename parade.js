const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
  const final = []
  var x = 0
  var y = 0
  for (const move of moves){
    if(move === "east"){
      x++;
    }else if (move === "west"){
      x--;
    }else if (move === "north"){
      y++;
    }else if (move === "south"){
      y--;
    }else {
      return "invalid";
    }
  }
  final.push(x,y);
  return final;
}
console.log(finalPosition(moves))