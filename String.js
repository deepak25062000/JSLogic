// let str="biriyani is great"
// console.log(str.length);//number of charecter
// console.log(str[0]);//position
// console.log('--------------------------------------------------------------------------------');
// //=======================================STRING METHOD()======================================//

// Stringname.method()
// console.log( str.charAt(2));
// console.log(str.length);
// // console.log('--------------------------------------------------------------------------------');
// //indexof()
// console.log( str.indexOf('i'));//-------------------findig first occurence

// //=============================================================================================//
// console.log('--------------------------------------------------------------------------------');
// console.log(str.indexOf('i'));
// console.log();
// console.log(str.indexOf('i', 2));
// console.log();
//  console.log(str.lastIndexOf('i',4));
// console.log('--------------------------------------------------------------------------------');

// //=======================================SUBSTRING ======================================//
//  let res=str.substring(0,3)//end index is excluded (--START AND END--) Not a length
//  console.log(res);
// console.log();
// console.log('--------------------------------------------------------------------------------');
// // CONVERT UPPERCASE 
// console.log(str.toUpperCase());
// console.log('--------------------------------------------------------------------------------');
// CONVERT LOWERCASE
// console.log(str.toLowerCase());

// console.log('--------------------------------------------------------------------------------');
// //REPLACE
//console.log(str.replace('b','vegb'));
// console.log();
//console.log(str.replaceAll('i','e'));
// console.log();
// console.log(str.replace('great','yummy'));//replace is case sensitive
// console.log('--------------------------------------------------------------------------------');

//************************************************************************************************************************ //
// let str="deepak"
// for(let i=0;i<=str.length;i++){
//   console.log(  str[i]);
// }


// console.log('--------------------------------------------------------------------------------');
// let str="biriyani"
// let str2=""
// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i]);
//      str2=str2+str[i]
// }
// console.log(str2);
// console.log('--------------------------------------------------------------------------------');

//*****************************************repeted charecter count*************************************** //
// let str="biriyani"
// let count=0
// for(let i=str.length-1;i>=0;i--){
//     if(str[i]=='i'){
//         count++;
//     }
// }
// console.log(count);

// console.log('--------------------------------------------------------------------------------');
// let s="java"
// let s1=""
// for(let i=0;i<=s.length-1;i++){
//     s1=s1+s[i]+s[i]
// }
// console.log(s1);

// let str='deepak'
// let str2=""
// for(let i=0;i<=str.length-1;i++){
//     str2=str2+str[i]+str[i]  
// }
// console.log(str2);
// console.log('--------------------------------------------------------------------------------');

// let str="nayana"

// if(str[0]==str[str.length-2]&& str[1]==str[str.length-1]){
//     console.log(true);
// }else{
//     console.log(false);
// }


//=============================================middle charecter============================================//
// let s1='java'
// function middle(s1){
//    console.log(s1[(s1.length/2)-1]  + s1[s1.length/2]);
// }
// middle(s1)
// //middle('java')//av
// //middle('string')//ri

//------------------------------------------PALINDROME----------------------------------------------//

// function palindrome(str,str1) {
//     for(i=0;i<=str.length-1;i++){
// str1=str1+str[i];
//     }
// if(str1==str){
// console.log('palindrome');
// }else{
//    console.log( 'not a polindrome');
// }
//     }
//     palindrome('jaj','')



// function palindrome(str,str1){
//     for(let i=0;i<=str.length-1;i++){
//         str1=str1+str[i]
//     }
//     if(str1==str){
//         console.log('its palindrome');
//     }
//     else{
//         console.log('its not palindrome');
//     }
// }
// palindrome('ded','')







