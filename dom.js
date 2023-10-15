//accessing 

// console.log(document.head);
// console.log(document.title);
// console.log(document.body);

// // // manipulate or updating

// document.title = "new title"

//---------//-----------------  accessing by id names  -------------//------------ returns 1st occurense------------


//  let a = document.getElementById('idname')
//  console.log(a);

//  let b =document.getElementById('desc')
// console.log(b);

//=========text content

// let a = document.getElementById('idname')
// a.textContent="new content"  //                   updating content
// a.innerText='update content'  //                     updating content 2 ways are ther

//----------------------------style---------------------------------



// let a = document.getElementById('idname')
// a.style.backgroundColor="red"
// a.style.color="white"
// a.style.fontSize='10px'

//---------------------------classname--------------------------------

// let a = document.getElementsByClassName('title')//-------------accessing the element
// console.log(a);

// a.textContent ='new content'//--------------------updating

// for (let i = 0; i < a.length; i++) {
//     a[i].style .color ='blue'
  
// }
// a[a.length-1].textContent='new content'
// a[2].textContent='new'
// a[3].style.color='blue'

//--------------------------------------------TAGNAME---------------------------------

// let a = document.getElementsByTagName('h1')
// console.log(a);
// a[1].textContent="new comtent"


//--------------------//      querySelector

let a = document.querySelector(".title")   // returns one elements
console.log(a);


let a1 = document.querySelectorAll(".title")// return all elements
console.log(a1);

let b= document.querySelector("#idname") // returns one elements
console.log(b);


let b1= document.querySelectorAll("#idname")// return all elements
console.log(b1);