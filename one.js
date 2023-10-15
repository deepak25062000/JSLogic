let btn = document.getElementById('btn')

let mode=()=>{
  if(btn.textContent == 'Dark Theme'){
    document.body.style.backgroundColor = 'black'
    document.body.style.color='white'
    btn.textContent='light Theme'
  }
  else{
    document.body.style.backgroundColor = 'white'
    document.body.style.color='black'
    btn.textContent='Dark Theme'

  }
}

// let input = document.getElementById('lable')
// let submit=()=>{
// console.log(input.value);  // for only the FORMS we use the values
// document.getElementById('title').textContent = input.value


// }

let body = document.getElementById('body')
let text = document.getElementById('text')

let submit=()=>{
    document.body.style.backgroundColor= body.value
    document.body.style.color=text.value
}