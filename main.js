var name="John Doe";
let age=20;
const country="USA";
console.log("Name: "+name+", Age: "+age+", Country: "+country);
let a=10;
let b=20;
const arr=[1,2,3,4,5];
arr.push(6);
console.log("Array: "+arr);
if(a==b){
    console.log("a is equal to b"); 
}else{
    console.log("a is not equal to b");
}
const date=new Date();
console.log("Current Date and Time: "+date.toString()); 
function greet(userName){
    return "Hello, "+userName+"!";
}
console.log(greet(name));
