//ASYNCRONUS AWAIT AND PROMISES
//set timeout
// let time=()=>{
//     setTimeout(() => {
//         console.log('its executed....!');
//     }, 1);
// }
// time()
//--------------------------------------------------------------------------------//

let MSD = () => {
  return "MSD is here"
}
let VIRAT = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("E sala cup namde")

    }
 , 3000);
  })

}
let ABD = () => {
  return "mr.360 is here"
}
let result = async () => {
  console.log(MSD());
  console.log(await VIRAT());
  console.log(ABD());
}
result()

