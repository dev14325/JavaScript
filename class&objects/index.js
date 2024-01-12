// const employee ={
//     salary :  50000,
//     calTax(){
//         console.log('Tax is 10 %');
//     }
// }

// const e1 = {
//     salary : 60000 ,// e1 ka prototype employee hai by reference object
//     calTax(){
//         console.log('Tax is 20 %');
//     } // if object & prototype has same method object method will be used
// }
// e1.__proto__ = employee;

// const e2 = {
//     salary : 40000
// }

// e2.__proto__ = employee;

class ToyotaCar {
    start(){
        console.log('Car is started');
    }

    stop(){
        console.log('Car is stopped');
    }

    setType(type){
        this.typeName = type;
    }
}

let fortuner  = new ToyotaCar();
fortuner.setType("Luxury Car");
let lexus = new ToyotaCar();
lexus.setType('Sports Car');


