//CLASS AND OBJECT
// class Database{
//     constructor(firstname,lastname,age,designation,salary){
//    this.firstname=firstname
//     this.lastname=lastname
//     this.age=age
//     this.designation=designation
//     this.salary=salary
// }
// }
// let person1=new Database("deepak","dongare",22,"developer",25000.00)
// console.table(person1);


// class Database{
//     constructor(firstname,lastname,age,salary,designation){
//         this.firstname=firstname
//         this.lastname=lastname
//         this.age=age
//         this.salary=salary
//         this.designation=designation
//     }
// }
// let person1=new Database("deepak","dongare",22,25000.00,"developer")
// console.table(person1);




// class Database{
//     constructor(firstname,lastname,age,designation,salary){
//         this.firstname=firstname
//             this.lastname=lastname
//             this.age=age
//             this.designation=designation
//             this.salary=salary
//     }

//         fullName=()=>`fullName of person is ${this.firstname}${this.lastname}`
//         yob=()=>`the person was born in ${2022-this.age}`
//         sal=()=>`person annual salary is ${(this.salary*12)/100000}lpa`
// }
//     let person1=new Database("deepak","dongare",22,"developer",250000)
//         console.log(person1.fullName());
//         console.log(person1.yob());
//         console.log(person1.sal());
    

// class Database{
//     constructor(firstname,lastname,age,salary,designation){
//         this.firstname=firstname
//         this.lastname=lastname
//         this.age=age
//         this.salary=salary
//         this.designation=designation
//     }

// fullname=()=>`full name of persom is ${this.firstname} ${this.lastname}`
// sal=()=>`person annual salary is ${this.salary*12/100000}lpa`
// yob=()=>`person  birth year is ${2022-this.age}`
// }
// let person1=new Database("deepak","dongare",22,20000.00,"developer")
// console.log(person1.fullname());
// console.log(person1.sal());
// console.log(person1.yob());




// class Instauser{
// constructor(name,followers,following,posts,RS,location){
//     this.name=name
//     this.followers=followers
//     this.following=following
//     this.posts=posts
//     this.RS=RS
//     this.location=location
// }
// fullDetails=()=>`the user name is ${this.name} who has ${this.followers} followers and located in ${this.following} who is currently ${this.posts} and relationship is ${this.RS} and location is ${this.location}`

// activity=()=>{
//     if(this.posts<100){
//         return `user is inactive`
//     }else if(this.posts>500){
//         return `user is active`
//     }
// }
// relationshipstatuscheck=()=>{
//     if(this.RS =="single"){
//         return this.fullDetails()
//     }else{
//         return `never mind`
//     }
// }
// }
// let user1=new Instauser("deepak",50,250,5500,"single","india")
// // console.log(user1);
// //  console.log(user1.fullDetails());
// console.log(user1.activity());

// console.log(user1.relationshipstatuscheck());



 class insta_user{
    constructor(name,followers,following,posts,RS,location){
        this.name=name
        this.followers=followers
        this.following=following
        this.posts=posts
        this.RS=RS
        this.location=location
    }
    fullDetails=()=>`user name is${this.name} is having ${this.followers}  followers and he is ${this.following} following and he shared the ${this.posts}posts and he is in ${this.RS} relationship and he stayed in ${this.location}`

    activity=()=>{
        if(this.posts>100){
            console.log('user is  active');
        }
        else{
            console.log('user is not active');
        }
    }


    chechrelationshipstatus=()=>{
        if(this.RS=='single'){
            return this.fullDetails()
        }
        else{
            return 'be a single'
        }
    }
 }
 let user1=new insta_user("deepak",200,2000,500,'single',"karnataka")

console.log(user1.activity());
console.log(user1.chechrelationshipstatus());
