//  let d1 = document.querySelector('div');
//  console.log(d1);

//  let val = d1.getAttribute('id');
//  console.log(val);

//  let val2 = d1.getAttribute('newName');
//  console.log(val2);


//  let para = document.querySelector('p');
//  console.log(para.getAttribute('class'));
//  console.log(para.setAttribute('class','tempo'))
//  d1.style.backgroundColor = '#F6D776'


//  creating new Element 
//  1 : create 
//  2 : add

// let btn = document.createElement('button');
// // console.log(btn);
// btn.innerText = "Click me !"
// btn.style.backgroundColor = "#BF3131"

 

// let div = document.querySelector('div');
// div.append(btn); // btn after div

// div.prepend(btn); btn before div
// div.after(btn);
// div.before(btn);

// adding button after paragraph
// let para = document.querySelector('p');
// para.append(btn);


let heading = document.createElement('h2');

heading.innerHTML = '<i> Hey I am new ...</i>'
document.querySelector('body').prepend(heading);
heading.remove();