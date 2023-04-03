// // let firstcard =12
// run()
// // let secondcard = 9
// // let sum = firstcard + secondcard
// // if (sum<21){
// //     console.log("do you want to draw a new card")
// // }
// // else if(sum===21){
// //     console.log("Wow congradulations You got Blackjack!")
// // }
// // else{
// //     console.log("try again sorry🥺")
// // }
// // let countel = document.getElementById("countEl")
// // let saveel = document.getElementById("saveEl")
// // let count = 0
// // function increment(){
// //     count += 1
// //     countel.textContent = count

// // }
// // function save(){
// //     let countstr = count +" "+"- "
// //     saveel.textContent += countstr
// //     count =0
// // }
// function run(){

// // let Person ={
// //     Name: "Salman",
// //     age: "21",
// //     Uni: "Gcuf"
// // }

// // console.log(Person.Name + " is " + Person.age + " Years Old" )
// let robo = ["rock","paper","scissors"]

// function getrand(){
//     let randval = Math.floor( Math.random()*3)
//     return robo[randval]
// }
// console.log(getrand())

// }
// function savelead(){
//     console.log("clicked")
// }
const inputel = document.getElementById('input-el')
let mylead = []

const inputbtn = document.getElementById("input-btn")
const Unlist = document.getElementById("ulist")
inputbtn.addEventListener("click", function(){
    mylead.push(inputel.value)
    console.log(mylead)
    render()
    inputel.value =""
})
function render(){
let listitems =""
for(let i = 0 ; i<mylead.length;i++){
    // listitems += "<li> <a target='_blank href=' "+ mylead[i] + "'>" + mylead[i] +"</a></li>"
    listitems += `
                <li>
                    <a target='_blank' href='${mylead[i]}'>
                     ${mylead[i]}
                     </a>
                </li>
                `
}
Unlist.innerHTML = listitems
}
// let Box = document.getElementById("box")
// Box.addEventListener("click", function(){
// console.log("box data get")
// })
