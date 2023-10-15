// ! print the digits of given number in a reverse
function printReverse(num)
{
  while(num>0)
  {
    var rem=num%10
    console.log(rem);
    // var num=Math.floor(num/10)
    // var num=Math.trunc(num/10)
    num=parseInt(num/10)   

  }

}
console.log(num);
printReverse(1234)

// ! print the sum of all the digits of the given number

// function printSum(num)
// {
//     let sum=0
//     while(num>0){
     
//     let rem = num % 10
//     sum=sum+rem
//     num = parseInt(num/10)
//     }
//     console.log(sum);
// }

// printSum(1234)
// printSum(5555)



// ! print the reverse of all the digits of the given number
// function reverse(num)
// {
// let rev=0;
// while(num!=0)
// {
//     let rem=num%10
//     rev=(rev*10)+rem
//     num=parseInt(num/10)
// }
// console.log(rev);
// }
// reverse(1203)

// ! check the given number is polindrome

// function pali(num)
// {
//     let rev=0
//     temp=num;
// while(num!=0)
// {
//     let rem=num%10
//     rev=(rev*10)+rem
//     num=parseInt(num/10)
    
// }
// if(rev==temp){
//     console.log('pali');
// }
// else{
//     console.log('not a pali');
// }
// }
// pali(121)
// pali(1234)


// ! round of the number
// function roundoff(num)
// {
// var dec=num%1;
// if(dec>=0.50)
// {
// num=num+(1-dec)
// }
// else
// {
// num=num-dec
// }
// console.log(num);
// }
// roundoff(12.56)     //13
// roundoff(10.49999)  //10


// var dec=num%1;
// num=dec>0.49 ? num+(1-dec) : num-dec;
// console.log(num);

// let arr=[10,20,30,40,50]; 
// arr.length--
// console.log(arr);


// function roundoff(num){
//     var dec=num%1;
//     if(dec>=0.5){
//         num=num+(1-dec)
//     }else{
//         num=num-dec
//     }
//     console.log(num);
// }
// roundoff(10.46)
// roundoff(10.56)

// !prime no?
// function prime(num){
//     var count=0;
//     for(let i=1;i<=num;i++){
//         if(num%i==0){
//             count++
//         } 
//     }
//     if(count==2){
//         console.log('its prime');
//     }else{
//         console.log('its not a prime');
//     }
 
// }
// prime(5)

