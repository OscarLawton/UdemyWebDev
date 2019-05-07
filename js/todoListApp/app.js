var todos = ["buy new turtle"];
var input = prompt("what would you like to do?");

while(input != "quit"){
    if(input === "list"){
        alert(todos)
    } else if(input === "new"){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    } else if (input === "delete"){
        var checkBool = false
        while(checkBool === false){
            var index = prompt("Enter index of todo to delete, type cancel to go back")
            if (index != "cancel"){
                var check = prompt("delete " + todos[index] + "?")
                if(check === "yes"){
                    todos.splice(index,1);
                    alert("delted " + todoes[index])
                    checkBool = true
                }  
            } else {
                checkBool = true;
            }
            
        }
        
    }
    input = prompt("what would you like to do?");
}
alert("Ok you quit the app")
