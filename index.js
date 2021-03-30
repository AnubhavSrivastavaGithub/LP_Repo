//alert("Hello you are on the browser");

var myfirstName = "Anubhav";
var mylastName = "Srivastava";

// BAsic ways to output message either in a alert box or on the body
//alert("Hi! This is " + myfirstName + " " + mylastName);
//document.write("Anubhav");


//Data Types : num,string,boolean,undefined,null
/* var string = "Hello";
var num = 5;
var boolean = false;
var undef ; //It is undefined as it is not initailized 
var result = stringvar + num; // Adding two different types result in a string */
//document.write(stringvar + num + result);

//Conditional Statements

/* var a = 5;
var b = 10;
if(a=b){
    document.write("a is smaller than b");
}
else{
    document.write("b is greater than a");
} */


//Switch statements
/* var fruit = "apple";
switch(fruit){
    case "apple":
        document.write("This is an apple");
        break;
    
    case "banana":
        document.write("This is a banana");
        break;

    default:
        document.write("Hello");
        break;
} */

//Loop
/* for(var i = 0;i < 10; i++){
    document.write("Hello" + i + "\n");
}

// Output : Hello0 Hello1 Hello2 Hello3 Hello4 Hello5 Hello6 Hello7 Hello8 Hello9

var count = 0;
while(count < 10){
    document.write("Hello" + count);
    count++;
}

// Output : Hello0Hello1Hello2Hello3Hello4Hello5Hello6Hello7Hello8Hello9
 */

//Functions
function normalfunctionname(name){
    document.write("Hello This is a Function" + " " + name);
}

normalfunctionname("Oppenheimer"); // calling the function and passing parameters if any
//Output : Hello This is a Function Oppenheimer


normalfunctionname(); //If you dont provide parameter, it is treated as undefined
//output : Hello This is a Function undefined

