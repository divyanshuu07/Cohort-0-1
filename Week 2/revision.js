//Callbacks

function square(n){
    return  n*n;
  }
  
  function cube(n){
    return n*n*n;
  }
  
  function quad(n){
    return n*n*n*n;
  }
  
  function sumOfSomething(a,b,fn){
    let square1= fn(a);
    let square2= fn(b);
    return square1+square2;
  }
  
  let ans = sumOfSomething(1,2,quad);
  console.log(ans);

  //async functions

  console.log("hi");

setTimeout(function(){
  console.log("hello");
},2000);

console.log("hii2")

