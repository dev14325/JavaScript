// let items = [250,645,300,900,50];
// 10% off items pr 
// for(let item of items){
//     console.log(`Prices of items after applying
//     offer are ${item-item*0.1}`);
// }

// for(let i=0;i<items.length;i++){

//     items[i] = items[i] - items[i]*0.1;

//     console.log(`Prices of items after applying
//   offer are ${items[i]}`);

// }


// for(let k of items){
//     console.log(k);
// }



// let ans = 0 ;
// function countVowels(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='i' || str[i]=='e' || str[i]=='o' || str[i]=='a' || str[i]=='u'){
//             ans++;

//         }
//     }
// }

// countVowels('DevPratapSingh');
// console.log(ans);


// const countVowels = (str) =>{
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='i' || str[i]=='e' || str[i]=='o' || str[i]=='a' || str[i]=='u'){
//                         ans++;
            
//                    }

//     }
//     return ans;
// }

// countVowels('Devpratapsingh');

// for each  call back function as argument

// let arr = ['delhi','mumbai','goa'];

// arr.map((val)=>{
//  console.log (val.charAt(0).toUpperCase()+val.slice(1));
// });


// arr.map(res);


// console.log(res);


// let arr2 = [2,9,10,24,92,11];

// let temp = arr2.filter((val)=>{
//     return val%2==0;
// })
// console.log(temp);


let n = prompt("Enter the number n : ");
let arr = [];

for(let i=1;i<=n;i++){
    arr[i-1] = i;
}

console.log(arr);

// use reduce method to cal sum of these numbers;


let sum = arr.reduce((prev,curr)=>{
  return prev+curr;
})

console.log(sum);

let mul = arr.reduce((prev,curr)=>{
    return prev*curr;
})


console.log(mul);









