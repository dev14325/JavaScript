// function Hello(){
//     console.log('Hello Dear')
// }

// setTimeout(Hello,2000);

// setTimeout(()=>{
//     console.log('Hello Dear2')
// },3000);

// console.log('1');
// console.log('2');
// setTimeout(()=>{
//   console.log('taking 2 sec to print the content') // async progaming
// },2000)
// console.log('3');
// console.log('4');


//*********** CallBack Hell**************/

// function getData(id,){ // suppose data is comimg in 2s

//     setTimeout(()=>{
//         console.log('Data is flowing for id : ' , id);
//     },2000);
    
    
// }

// Now lets suppose I want data1 , data2 , data3 one after another How to do this ??
// we dont want data together if we do like this 

// getData(1);
// getData(20);
// getData(3); // this is wrong its printing data simultanously



// function getData(id,getNextData){ // suppose data is comimg in 2s

//          setTimeout(()=>{
//             console.log('Data is flowing for id : ' , id);
//             if(getNextData)  getNextData();
           
//          },2000);
        
        
//      }

//      getData(1,()=>{
//         getData(2,()=>{
//             getData(3,()=>{
//                 getData(4);
//             });
//         });

//      }) // dificult to understand and manage code --> CallBack Hell







    