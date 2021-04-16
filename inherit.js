class Parent{
    constructor(){
        this.fatherName="Abdul karim";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    // getFullName(){
        // return this.name+this.fatherName;
    // }
}

const baby1=new Child("Jihad Rahman");
const baby2=new Child("Habib Rahman");
console.log(baby1,baby2);