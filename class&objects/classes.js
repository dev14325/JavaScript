class person {
    constructor(){
        console.log('entering parent cons')
        this.species = 'human';
        console.log('exiting parent cons')
    }

    eat(){
        console.log('eat');
    }

    sleep(){
        console.log('sleep');
    }
}


class eng extends person {

    constructor(branch){
        console.log('entering derived cons')
       
        super(); // invoke parent class constructor
        this.branch = branch;
        console.log('exiting derived cons')
    }
   work(){
    console.log('solving DSA problems');
   }
}

let e1 = new eng('CSE');