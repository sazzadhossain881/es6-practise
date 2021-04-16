class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="HM institution school and college";
    }
}

const student1=new student(101,"Habib Rahman");
const student2=new student(102,"Sakil Hasan");
const student3=new student(103,"Jahid Hasan");
console.log(student1,student2,student3);