var fruits = ["apple","mango","peach","strawberry"];

function message(msg){
    document.getElementById("test").innerHTML = fruits ;
}

function loadfruit(){
    document.getElementById("fruit").innerHTML = fruits;
}

function loop(){
    var x = prompt("Enter a number :");
    for(var i=0;i<x;i++){
        if(i%2 === 0)
        document.write(i);
        else 
        document.write('This is odd');
    }
}


