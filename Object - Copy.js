// let database={
//     name:"deepak",
//     age:22,
//     designation:"developer"
// }
// console.log(database);

//===================TABLE FORMAT==================//

// let database={
    
//     name:"deepak",
//     age:22,
//     designation:"developer"
// }
// console.log(database.name,database.age);//DOT NOTATION
// console.log(database['name']);//HERE WE ONLY USE BRACAKET

// database.skills="mernstack"//INTIIALIZATION
// console.log(database);

// database.name="om shanti"//RE-INITIALIZATION
// console.log(database);
// console.table(database);

// delete database.name//DELETING
// console.log(database);
// console.table(database)

//=====================================new object create======new keyword=====================//
// let person=new Object
// person.name="deepak",
// person.age=22,
// person.designation="developer",
// // person.designation=["developer","hello"]
// // console.log(person);
// // console.table(person);
// // console.log(person.designation[1])
// // console.table(person.designation)
// person.skills:{
//     BE:"JAVA",
//     FE:"JS"
// }
// console.log(person.skills.BE);


//===================================series======================//
let series={
    title:"moneyheighest",
    genre:"comedy",
    cast:["rachel","joy"],
    streaming:"netflix",
    rating:"10"
}
console.log("THE SERIES NAME IS ",series.title," WHICH IS STREAMING ON ",series.streaming,"  THAT CASTS ",series.cast," AND HAS A RATING OF ",series.rating);
//THE SERIES NAME IS(NAME) WHICH IS STREAMING ON(STREAMING PLATFORM) THAT CASTS {},{}, AND HAS A RATING OF{RATING}
console.log(`the series name is ${series.title} which is streaming on ${series.streaming}`);