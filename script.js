



let btn = document.querySelector("#btn");
let center = document.querySelector("#center");
let leftBox = document.querySelector("#leftbox")
let rightBox = document.querySelector("#rightbox")



// let randomCode =  `${rc} ${gc} ${bc} `
let rc = "abcdef0123456789"
btn.addEventListener("click",()=>{
    gradient90deg()
})
function gradient90deg(){
    randomCode1 = "";
    randomCode2 = "";
    rcLength = 6;

    randomCode1 += rc[Math.floor(Math.random()*rc.length)]
    while(randomCode1.length <rcLength ){
        randomCode1 += rc[Math.floor(Math.random()*rc.length)]
    }
    randomCode2 += rc[Math.floor(Math.random()*rc.length)]
    while(randomCode2.length <rcLength ){
        randomCode2 += rc[Math.floor(Math.random()*rc.length)]
    }


    leftBox.innerHTML = `Color code = #${randomCode1}`
    rightBox.innerHTML = `Color code = #${randomCode2}`
    center.style.background = `linear-gradient(90deg, #${randomCode1}, #${randomCode2})`
    console.log(randomCode1,randomCode2)
}
