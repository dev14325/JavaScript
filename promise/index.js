// let promise = new Promise((resolve,reject)=>{

//     console.log('I am promise')
//     // resolve('succeed');
//     reject('failed')
// })



// promise --> state, result 
/* promise --> state 
pending , resolve , rejected
*/


        // function getData(dataId , getNextData){
        //     return new Promise((resolve,reject) =>{

          
        //     setTimeout(()=>{
        //         console.log('Data is flowing for id : ' , dataId);
        //         resolve('success')
        //         if(getNextData)  getNextData();
               
        //      },5000);

        //     })
        // }


        // const getPromise = ()=>{
        //     return new Promise((resolve,reject)=>{

        //         console.log('I am promise');
        //         resolve('success');
        //         // reject('Network error')
        //     })
        // }

        // let promise = getPromise();
        // promise.then((res)=>{
        //     console.log('promise fulfilled ',res);  // invoked when promise is fulfilled
        // })

        // promise.catch((err)=>{
        //     console.log('rejected ',err);
        // })




        // promise chaining 
    //    function asyncFunc1(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log('data 1');
    //             resolve('success');

    //         },4000)

    //     })
    //    }

    //    function asyncFunc2(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log('data 2');
    //             resolve('success');
    //         },4000)

    //     })
    //    }



    //    console.log('fethcing data 1...')
    //    let p1 = asyncFunc1();
       
    //    p1.then((res)=>{
    //     // console.log(res);
    //     console.log('fethcing data 2...')
    //     let p2 = asyncFunc2();
    //     p2.then((res)=>{

    //     })

    //    })


    //    function asyncFunc2(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log('data 2');
    //             resolve('success');
    //         },4000)

    //     })
    //    }


    //    console.log('fethcing data 2...')

    //    let p2 = asyncFunc2();
    //    p2.then((res)=>{
    //     // console.log(res);
    //    })

       // Both the data is coming togther --- we need data one after another 1st data1 then data2



     function getData(id){
        return new Promise((resolve,reject)=>{
          
            setTimeout(()=>{
                console.log('Data is flowing for id : ' , id);
                resolve('success');

            },2000)

        })
     }
       

//   console.log('fetching data 1');

//   getData(1).then((res)=>{
//     console.log('fetching data 2');
//      return getData(2);

//   }).then((res)=>{
//     console.log('fetching data 3');
//     return getData(3);

//   }).then((res)=>{
//     console.log(res);
    

//   });

       
// async await 

async function getAllData() {
    console.log('fetching data 1');
    await getData(1);

    console.log('fetching data 2');
    await getData(2);

    console.log('fetching data 3');
    await getData(3);

    console.log('fetching data 4');
    await getData(4);
}



