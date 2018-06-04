

var toDos= ["vacation", "shopping"];
var input= prompt("What would you like to do");

function newItem(){
	var newToDo = prompt("Enter new to do?")
  	toDos.unshift(newToDo);

}

function listItem(){
  toDos.forEach(function(toDos, i){
      console.log(i + ":" + toDos);
   	 });

}

while(input !== "quit"){
   if(input === "list"){
   	 console.log("===========")
   	 listitem();   	 
   }

  
 else if(input === "new"){
  	newItemw();
  }
  input=prompt("What would you like to do?")


}
 console.log("You quit the app")
 