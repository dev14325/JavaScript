let btn = document.querySelector('button');
btn.addEventListener("click" , ()=>{
    console.log('Button1 was clicked')
})


btn.addEventListener("click" , ()=>{
    console.log('Button2 was clicked')
})





let removebtn = ()=>{
    console.log("Button3 was clicked")
}

btn.addEventListener("click",removebtn);
btn.addEventListener("click" , ()=>{
    console.log('Button4 was clicked')
})

// let div = document.querySelector('#box');

// div.addEventListener("mouseover",(e)=>{
//     console.log('you are inside the div');
//     console.log(e);
//     console.log(e.type);
// })

btn.removeEventListener("click",removebtn);