const toggle=document.querySelector(".toggle")
const ulnav=document.querySelector("ul")
toggle.addEventListener("click",()=>{
    ulnav.classList.toggle("active")
})
const input=document.querySelector(".input")
const form=document.querySelector(".form")
form.addEventListener("click",()=>{
    input.classList.toggle("active")
})

