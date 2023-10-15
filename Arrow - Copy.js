// let cube1=(b)=>{
//     return b**3
// }
// console.log(cube1(5));

// let cube3 = b=>b**3
// console.log(cube3(5));

// let sum=(a,b)=>a+b 
// console.log(sum(10,20));

// let cube4 = b =>`the cube4 b is ${b**3}`
// console.log(cube4(5));

// let sum2=(a,b)=>`the sum of a and b is ${a+b}`
// console.log(sum2(10,20));

//let i=[1,3,4]
// for( i=0;i<=a.length;i++){
//     if(a[i]==1 &&a[i+1]==3){
//       console.log(true);
//     }
//   console.log(false);
// }


// let one=(a,result)=>{
//     for(let  i=0;i<=a.length;i++){
//             if(a[i]==1 && a[i+1]==3){
//                 result=true
//               // console.log(true)
//             }
// //                else{
// // console.log(false);
// //
//                     }                
// console.log(result);

// }
// one([1,3,5,1,3],false)

//===============================CALLBACK FUNCTION==========================//
//CONVERT ALL THE ARRAY ELEMNT TO SQURE

//PRINT ARRAY ELEMNT >5

//SUM OF ALL ARRAY ELEMENT

// let a=[1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<=a.length;i++){
//    console.log(a[i]**2);
// }
//============================MAP==============================//PERFORM SOME OPERATION ON ARRAY



// const a=[1,2,3,4,5,6,7,8,9,10]
// const result=a.map((x)=>x>5)
// console.log(result);


// let result1=a.map((y)=>y+0)
// console.log(result1);


// let result2=a.map((i)=>i/2)
// console.log(result2);
//******************************************************************************** *//
//DIFFERENCE BERTWEEN MAP AND FILTER
//******************************************************************************** *//



//===========================FILTER=================================//FILTER SOME CONDITION IN ARRAY

// let a=[1,2,3,4,5,6,7,8,9,10]
// let result =a.filter((x)=>x>5)//CALL BACK
// let result =a.filter((x)=>x%2)//perform boolean operation
// console.log(result);

//============================REDUCE=====================================//
// let a=[1,2,3,4,5,6,7,8,9,10]
// let result=a.reduce((sum,x)=>sum=sum+x)
// console.log(result);
// let a1=[10,10,10]
// let result1=a1.reduce((squre,x)=>squre=squre*x)
// console.log(result1);

//==========================SCOPE==================================//

// function scope(){
//     for (let i=0;i<5;i++){
//         console.log(i);
//     }
    // console.log(i);//UNDEFINED=>LET IS BLOCK  CODE
// }
// scope()
// //--------------------------------------------------------------------//
// function scope1(){
// if(10>5){
//     const i=10
//     console.log(i);
// }
// console.log(i);//UNDEFINED
// }
// scope1()
//--------------------------------------------------------------------//
// function scope2(){
//     for (var i=0;i<5;i++){
//         // console.log(i);
//     }
//     console.log( i);
// }
// scope2()
//--------------------------------------------------------------------//