var person = {
    name: "bob",
    talk: function(){
        console.log("hi, my name is " + this.name)
    }
}


person.talk()