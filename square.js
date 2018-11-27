// 1)functions with parameters with return type


// function cube(a){
//     var res=a*a*a;
//     return res;
// }
// var result=cube(10);
// console.log(result);





// 2)function without parameters and with return type



// var x=10;
// function display(){
//     console.log(x)
// }
// display();





// 3)functions with parameters and without return type


// function add(a,b){
//     console.log(a+b);

// }
// add(10,20);


// same for sub:


// function  sub(a,b){
//     console.log(a-b);
// }
// sub(50,20);



// same for mul

// function mul(a,b){
//     console.log(a*b)
// }
// mul(50,30);





// 4)function parameters and without return typeof




// function get(){
//     return  "10";
    
// }
// console.log( get() );






// function expression:





// var courses=function(){
//     console.log("DIGITAL LYNC")

// }
// function s(a){
//     console.log(a);
// }
// s(10);



// function scope:


function outer(){
    var firstname="sana";
    console.log(firstname)
    function inner(){
        var lastname="kumar";
        console.log(lastname)
    }
    inner();
}
outer();






// first class function:   IIFE(immediately innolved function expression)



(function(){
    console.log("IIFE")
})();








