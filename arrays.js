// ! shift method logic

// let arr=[10,20,30,40,50]

// console.log(arr.unshift(60));

// console.log(arr);


// function unshift(arr, newVal)
// {
// for(let i=arr.length; i>0; i--)
// {
// arr[i]=arr[i-1]
// //store prev bucket val to current bucket
// }
// arr[0]=newVal

// console.log(arr);
// }
// unshift([10,20,30,40,50], 100)

// ! shift
// function shift(arr)
// {
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=arr[i+1]
//     //current=next bucket
// }
// arr.length--
// console.log(arr);
// }
// shift([10,20,30,40,50])

// !add three
// function addThree(a=0,b=0,c=0)
// {
// var sum=a+b+c
// console.log(sum);
// }
// addThree(10)

// function addThree(a=0,b=0,c=0)
// {
// let sum=a+b+c
// console.log(sum);
// }
// addThree(10,30,60)


// !slice
// let arr=[10,20,30,40,50]
// console.log(arr.slice(2,3));

// function takeMultipleArgs(...a) //rest parameter   spread operator
// {
//     console.log(a);
// }
// takeMultipleArgs(10,20,30,40,50,60,70)
// takeMultipleArgs()
// takeMultipleArgs(10,20,30)


// ! unshift multiple elements
// function unshift(arr, ...newVal)
// {
//     arr.length=arr.length+newVal.length;
//     for(let i=arr.length-1;i>=newVal.length;i--)
//     {
//         arr[i]=arr[i-newVal.length]
//     }
//     for(let i=0; i<newVal.length;i++)
//     {
//         arr[i]=newVal[i]
//     }
//     console.log(arr);
// }
// unshift([10,20,30,40,50], 'a','b,','c','d','e')


// !slice logic
// function slice(arr, start, end)
// {
// let b=[]
// for(let i=start,j=0; i<end; i++, j++)
// {
//     b[j]=arr[i]
// }
// console.log(b);
// }
// slice([10,20,30,40,50],2,3)
// slice([10,20,30,40,50],1,4)


//! splice logic -delete, add, replace.

// let a=[10,20,30,40,50];
// let d= a.splice(2,1,100,200)
// // console.log(a.splice(2,1,100,200));
// console.log(d);
// console.log(a);

//! SPLICE()
// function splice(a, start, delCount, ...add) {
//     // ! left shift to delete
//     for (let i = start; i < a.length; i++) {
//         a[i] = a[i + delCount]
//     }
//     // ! delete extra element
//     while (a[a.length - 1] == undefined && a.length > 0) {
//         a.length--;
//     }
//     // !right shift to add
//     for (let i = a.length - 1; i >= start; i--) {
//         a[i + add.length] = a[i]
//     }
//     // ! add elements inbetween
//     for (let i = start, j = 0; j < add.length; i++, j++) {
//         a[i] = add[j]
//     }
//     console.log(a);
// }
// splice([10, 20, 30, 40, 50, 60], 0, 1, 100, 200, 300)
// splice([10, 20, 30, 40, 50], 0, 2)
// splice([10, 20, 30, 40, 50], 0, 3)
// splice([10, 20, 30, 40, 50], 0, 4)
// splice([10, 20, 30, 40, 50], 0, 5)

// splice([10, 20, 30, 40, 50], 1, 1)
// splice([10, 20, 30, 40, 50], 1, 2)
// splice([10, 20, 30, 40, 50], 1, 3)
// splice([10, 20, 30, 40, 50], 1, 4)

// splice([10, 20, 30, 40, 50], 2, 1)
// splice([10, 20, 30, 40, 50], 2, 2)
// splice([10, 20, 30, 40, 50], 2, 3)
// splice([10, 20, 30, 40, 50], 2, 4)

// splice([10, 20, 30, 40, 50], 3, 1)
// splice([10, 20, 30, 40, 50, 60, 70, 80], 3, 2)
// splice([10, 20, 30, 40, 50, 60, 70, 80], 3, 3)
// splice([10, 20, 30, 40, 50, 60, 70, 80], 3, 4)


// ! max method logic

// var a=[10,20,40,660]
// console.log(Math.max(...a));

// function findMax(arr)
// {
// var max=arr[0];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);
// }
// findMax([-880,-50,-90,-85,-10])
// findMax(['a','b,','c'])

// !min method logic
// function findmin(arr)
// {
//     var min=arr[0]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]<min)
//         {
//             min=arr[i]
//         }
//     }
//     console.log(min);
// }
// findmin([10,20,30,40,-90])
// findmin(['a','b,','c'])

//! sorting logic
//without callbackfunction it will work like char sorting

// var a=[19,20,3,30,40,5,6,2,]
// console.log(a.sort((x,y)=>{return x-y})); //ascending
// console.log(a.sort((x,y)=>{return y-x})); //descending

// function sortArray(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {     //arr[i] > arr[j] ascending                      //arr[i] < arr[j] descending
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// sortArray([10, 20, 50, 60, 30, 90, 70, 40, 80])


// ! REMOVING DUPLICATE
// function duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr[j] = undefined
//             }
//             if (arr[i] == undefined) {     //arr[i] > arr[j] ascending                      //arr[i] < arr[j] descending
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//             if(arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }

//         }
//     }
//    while (arr[arr.length - 1] == undefined) {
//         arr.length--
//     }

//     console.table(arr);

// }
// duplicate([10, 50, 30, 10, 20])









//-----------------------------------------------------------------------------------------------//
//! unshift
// function unshift(arr,newVal){
//     for(let i=arr.length; i>0;i--){
//         arr[i]=arr[i-1]
//     }
//     arr[0]=newVal
//     console.log(arr);
// }
// unshift([10,20,30,40],100)


//! shift
// function shift(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+1]
//     }
//     arr.length--
//     console.log(arr);
// }
// shift([10,20,30,40,50])


// function fibo(num){
//     let n1=0;
//     let n2=1;
//     let n3=0;
//     console.log(n1+" "+n2+" ");
//     for(let i=1;i<=num-2;i++){
//         n3=n2+n1;
//         n1=n2;
//         n2=n3;
        
//     }
//     console.log(n3);
// }
// fibo(12)
// ! sum of fibo
// function fibo(num){
//     let n1=0;
//     let n2=1;
//     let n3=0;

//     // console.log(n1+" "+n2+" ");
//    let sum=1
//     for(let i=1;i<=num-2;i++){
//         n3=n2+n1;
//         n1=n2;
//         n2=n3;
//         sum=sum+n3 
//     }
  
//     console.log(sum);
// }
// fibo(7)