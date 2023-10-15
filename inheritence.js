/ //*****INHERITANCE************* */
// class jspider{
//     constructor(name,age,gender,empid){
//         this.name=name
//         this.age=age
//         this.gender=gender
//         this.empid=empid
//     }
    
    
    
//  }
// class faculty extends jspider{
//     constructor(name,age,gender,empid,salary,comm){
//         super(name,age,gender,empid)
//         this.salary=salary
//         this.comm=comm

//     }
//     yob=()=>`the year of birth is ${2022-this.age}`
   

// }

// let faculty1=new faculty("deepak",22,'f',123,123546,5000)
// console.table(faculty1);
// console.log(faculty1.yob());

//*****D--structure************* */

// for array take any variable like a,b,c..............
// let arr=[1,2,3,4,5,6]
// let[a,b,c,d,e,f]=arr
// // let[b,c]=arr
// console.log(b,c);
// console.log(a,b,c,d,e,f);


//for object we can access only by keys

let obj={
    name:"deepak",
    age:22,
    role:"developer"

}
let {name,age}=obj
// let {role}=obj
console.log(name,age);
console.log(obj);