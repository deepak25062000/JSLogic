

// let a=[10,'a',1.5,true]
// console.log(a[2]);              //1.5
// console.log(a[5]);              //undefined
// console.log(a.length)                        //number of element in array
// console.log(a.length-1,a[a.length-1]);     //to get value in the index position

//----------------------------------------------------------------------------------------------------------------//

// function a(Arr){
//     if(Arr[0]==6 && Arr[Arr.length-1]==6){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// a([6,2,6])
// function a(Arr){
//   if(Arr[0]==6 && Arr[Arr.length-1]==6){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// }
// a([6,5,3])
//----------------------------------------------------------------------------------------------------------------//

// function six(arr){
//     if(arr[0]==6 && arr[arr.length-1]==6){
//         return true;
//     }
//     return false;
// }
// console.log(six([6,3,6]));

//----------------------------------------------------------------------------------------------------------------//
// let a=[1,2,3];
// let b=[1,2,3];
function c(a,b){
    if(a[0]==b[0] && (a[a.length-1]==b[b.length-1])){
        console.log(true);
    }else{
        console.log(false);
    }

}
c([1,4,3],[1,2,3])


//-------------------------------------------------------------------------------------------------------------//
// let a=[1,2,3]
// let b=[1,4,4]
// function c(a,b){
//   if(a[0]==b[0] && a[a.length-1]==b[b.length-1]){
//     return true;
//   }
//   return false;
// }
// console.log(c(a,b));
// ----------------------------------------------------------------------------------------------------------------//

// let a=[1,2,3];
// function odd(a){
//   let  c=(a.length-1)/2;
//     {
//      console.log(a[c]);
//     }
// }
// odd(a)
//----------------------------------------------------------------------------------------------------------------//
// function mid(a){
//    let c= (a[(a.length-1)/2]);
//    console.log(c);
// }
// mid([1,2,3,4,5,6,0])
//----------------------------------------------------------------------------------------------------------------//

// let arr=[1,2,3,4,5];
// arr[2]=100;                      //re initialization array element
// arr[5]=500;                      //Array index is not fixed and 500 added to new 5th position
// arr[6]=500;                      //[ 1, 2, 100, 4, 5, <1 empty item>, 500 ]
// console.log(arr);
//----------------------------------------------------------------------------------------------------------------//

// ARRAY METHODS
// ----1)PUSH()-------add
// ----2)POP()----------------------------------remove
// ----3)SHIFT()--------------------------------remove
// ----4)UNSHIFT()------add
// ----5)SPLICE(START ,DELETE,NEW INDEX,COUNT ELEMENT)



// let arr=[1,2,3,4,5];
// Arraryname.methodname()
// push

// arr.push(100,200,300,400)
// console.log(arr);
//----------------------------------------------------------------------------------------------------------------//

// let arr=[1,2,3,4,5];
// arr.pop()
// console.log(arr);   //we can remove only one value from array list (LAST VALUE)using pop methode

//----------------------------------------------------------------------------------------------------------------//
// let arr=[1,2,3,4,5];
// //ARRAYNAME.METHODENAME()
// //SHIFT
// arr.shift()
// console.log(arr);                            //o/p--[ 2, 3, 4, 5 ]
//----------------------------------------------------------------------------------------------------------------//


// let arr=[1,2,3,4,5];
// //ARRAYNAME.METHODENAME()
// //UNSHIFT
// arr.unshift(100)
// console.log(arr);               //o/p--[ 100, 1, 2, 3, 4, 5 ]
//----------------------------------------------------------------------------------------------------------------//

// let arr=[1,2,3,4,5]
//ARRAYNAME.METHODNAME()
//SPLICE----start from 2 and  delete 2 more element
// arr.splice(2,2,9,0)
// console.log(arr);

//----------------------------------------------------------------------------------------------------------------//


// let arr=[1,2,3,4,5]
// //ARRAYNAME.METHODNAME()
// //APLICE----start from 2 and  delete 2 more element
// arr.splice(1,0,100,200)//--------------for addition use 3 variable
// arr.splice(1,2,100,200,700,800)
// // arr.splice(0,arr.length)
// console.log(arr);

//----------------------------------------------------------------------------------------------------------------//
// let arr=[1,2,3,4,5]
//ARRAYNAME.METHODNAME()
//SPLICE
// let result =arr.slice(1,4)//------------------------o/p--->[2, 3, 4]//----->leave the range value and remove 
//the remaining value...slice(Strt,end(not include))
// let result =arr.slice(3)//-----------------------o/p-->[ 4, 5 ]---print all element from 3
// console.log(result);
//----------------------------------------------------------------------------------------------------------------//


//--------------------------------toSTRING--------------------------------------------//
// let arr=[1,2,3,4,5]
//ARRAYNAME.METHODNAME()
//toString
// let res=arr.toString()
// console.log(res);
//----------------------------------------------------------------------------------------------------------------//

// let arr=[1,2,3,4,5]
// //ARRAYNAME.METHODNAME()
// //joins
// let res=arr.join('*')//separate the array element by any symbol or charecter
// console.log(res);

//----------------------------------------------------------------------------------------------------------------//
// let arr=[1,2,3,4,5]
// //ARRAYNAME.METHODNAME()
// //reverse
// let res=arr.reverse()//reverse the array element
//  console.log(res);
//----------------------------------------------------------------------------------------------------------------//

// let arr=[1,2,3,4,5]
// //ARRAYNAME.METHODNAME()
// //include
// let res=arr.includes(6)//check the existance of given array OR check tyhe given element present in array list or not 
//  console.log(res);
//----------------------------------------------------------------------------------------------------------------//
// let arr=[1,2,3,4,5,6]
// for (let i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }

//----------------------------------------------------------------------------------------------------------------//

//REVERSE
// let arr=[1,2,3,4,5,6]
// for (let i=arr.length-1;i>=0;i--){
//          console.log(arr[i]);
// }
//----------------------------------------------------------------------------------------------------------------//
// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr[i]=0
//     }
// }
// console.log(arr);
//----------------------------------------------------------------------------------------------------------------//


//UNSHIFT AND PUSH
// let a1=[1,2,3,4,5,6]
// a2=[]
// // for (let i=a1.length-1;i>=0;i--){
// //     a2.push(a1[i])
// // }
// for (let i=0;i<=a1.length-1;i++){
//     a2.unshift(a1[i])
// }
// console.log(a2);
//----------------------------------------------------------------------------------------------------------------//
// let a1=[1,2,3,4,5,6,7]
// count=0;
//   for(let i=0;i<a1.length;i++){
//     if(a1[i]%2!=0){
//         count++;
//     }
// }
// console.log("number of odd count in array is    "+count);
//-------------------------------------------------------------------------------------------------------------//


// let a1=[1,2,3,4,5,6,7]
// count=0;
//   for(let i=0;i<a1.length;i++){
//     if(a1[i]%2==0){
//         count++;
//     }
// }
// console.log("number of even count in array is    "+count);
//----------------------------------------------------------------------------------------------------------------//

//SPLICE
// let a1=[1,2,3,4,5,6,7]
// for(let i=0;i<a1.length;i++){
//         if(a1[i]%2==0){
//            a1. splice(i,1)
//         }
//     }
//     console.log(a1);
//----------------------------------------------------------------------------------------------------------------//


//FINDING EXAN=CT NUMBER IF THE NUMBER PRESENT INT THE GIVEN ARRAY============FIND 7====================//
// let a1=[1,2,3,4,6,7]
// result=false;
// for(let i=0;i<=a1.length-1;i++){
//     if(a1[i]==7){
//         result=true;
//     }
// }
// console.log(result);
//----------------------------------------------------------------------------------------------------------------//
// let a1=[1,2,3,4,5,6,7]
// let a2=[]
// let a3=[]

//   for(let i=0;i<a1.length;i++){
//     if(a1[i]%2!=0){
//       a2.push(a1[i])
//     //   a2.unshift(a1[i])
//     }else{
//         a3.push(a1[i])
//     }
// }
// console.log(a2,a3);
