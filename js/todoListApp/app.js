var todos = ["buy new turtle"];
var input = prompt("what would you like to do?");

while(input != "quit"){
    if(input === "list"){
        alert(todos);
    } else if(input === "new"){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("what would you like to do?");
}
alert("Ok you quit the app")
