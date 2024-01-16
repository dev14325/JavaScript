const URL = 'https://cat-fact.herokuapp.com/facts';
const para = document.querySelector('#para');
const btn = document.querySelector('#btn');



// let response = fetch(URL);
// console.log(promise);

// const res =  async()=>{
//     let response = await fetch(URL);
//     console.log(response) // json Format
//     let data = await response.json();
//     para.innerText = data[0].text;
    
// }

// promise chaining 

function res(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        para.innerText = data[3].text;
    })
}


btn.addEventListener('click',()=>{
    res();
})


