// var name="John Doe";
// let age=20;
// const country="USA";
// console.log("Name: "+name+", Age: "+age+", Country: "+country);
// let a=10;
// let b=20;
// const ae=[1,2,3,4,5];
// arr.push(6);
// console.log("Array: "+arr);
// if(a==b){
//     console.log("a is equal to b"); 
// }else{
//     console.log("a is not equal to b");
// }
// const date=new Date();
// console.log("Current Date and Time: "+date.toString()); 
// function greet(userName){
//     return "Hello, "+userName+"!";
// }
// console.log(greet(name));

// let fruits=["Apple","Banana","Cherry"];
// let pop_method=fruits.pop();
// console.log("Popped Fruit: "+pop_method);
// console.log("Fruits after pop: "+fruits);

// let push_method=fruits.push("Date");
// console.log("Pushed Fruit: Date");
// console.log("Fruits after push: "+fruits);

// let days="monday";
// switch(days){
//     case "monday":
//         console.log("It's Monday!");
//         break;      
//     case "tuesday":
//         console.log("It's Tuesday!");
//         break;      
//     default:
//         console.log("It's another day!");

// }

// let str="hello";
// let search_char="e";
// let index=str.indexOf(search_char);
// document.getElementById("output").innerHTML=Text.replace("e","a");

// // try{
// //     console.log("hello world");

// // }catch(e){
// //     console.log("something's wrong: ");
// // }

// // const function=(a,b)=>{
// //     console.log("Sum: "+(a+b));
// // };
// // function(5,10);

// const arr=[10,20,30,40,50];
// arr.map((item)=>console.log("Item: "+item));

// for(let i=0;i<arr.length-1;i++){
//     console.log("Array Element: "+arr[i]);
// }

// const numbers=[1,2,3,4];
// const words=[First,second,third,fourth]=numbers;
// console.log(words[first]);

// const person={name:"rio",age:31
// };
// const{name}=person;
// console.log(name);

const numbers=[5,10,15,20,25];
const[first,,third,...rest]=numbers;
console.log("First: "+first);
console.log("Third: "+third);
console.log("Rest: "+rest);

//spread operator
const arr1=[1,2,3];
const arr2=[4,5,6];
const combined=[...arr1,...arr2];
console.log("Combined Array: "+combined);
// First: 5
// Third: 15
// Rest: 20,25
// Combined Array: 1,2,3,4,5,6


const no=[7,8,9];
const[one,two,...others]=no;
console.log(one,two,rest);
// 7 8 [ 20, 25 ]

let x=10;
x==10?console.log("x is 10"):console.log("x is not 10");