/*
Task 1

function checkNum(n){
    if((n%2)==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkNum(5);

Task 2

function square(n){
    return n*n;
}
console.log(square(2));

Task 3

function greater(a,b){
    if(a>b) return a;
    else if(a<b) return b;
    else return a=b;
}
console.log(greater(5,2))

Task 4

strConcat = (a,b) => {
    return a + b;
}
console.log(strConcat("Vaibhav","Suthar"));

Task 5

sum = (a, b) => {
    return a + b;
  };
  console.log(sum(5,6));

Task 6

checkStr = (char, str) => {
    return char.includes(str);
}

if(checkStr("Vaibhav", "s")){
    console.log("Yupp");
}
else{
    console.log("Nope!");
}

Task 7

product = (a,b) => {
    return a * b;
}
console.log(product(5,12));

Task 8

data = (name, age) => {
    return (name + "'s age is "+age);
}
console.log(data("Vaibhav",23));

Task 9

repeatFun = (func, times) => {
    for(let i = 1; i<= times; i++){
        func();
    }
}
greet = () => {
    console.log("Hello, World!")
}
repeatFun(greet,5);

Task 10

repeatFun = (fun1, fun2, name) => {
    fun2(fun1(name));
};
greet = (name) => {
  return ("Hello " + name + ",");
};
ask = (param) => {
    console.log(param + " How are u?")
} 
repeatFun(greet, ask, "Vaibhav");
*/
