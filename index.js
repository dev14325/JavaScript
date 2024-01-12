// for of

// let str = "DevPratapSingh";

// for(let i of str){ // for of
//     console.log("i = ",i);
// }

// for in 

const student = {
    name : "Dev",
    age : 21,
    cgpa : 8.4,
    isPass : true
}

for(let i in student){
    console.log("key :  " ,i , "value : ",student[i]);
}