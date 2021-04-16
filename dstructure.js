
// object destructuring
const person={name:"Jack William",age:17,job:"scrolling",address:"Tangail",phone:0171234567};
const {name,age,job}=person;
console.log(name,age,job);

const complexObject={
    name:"Jahid Hasan",
    info:{
        address:"Tangail",
        phone:'01727265079'
    },
};

const {phone}=complexObject.info;
console.log(phone);
// array destructuring

const friends=["Habib Rahman","Jihad Hasan","Sakil Ahamed","Mahbub Alam"];
const [first,...restFriend]=friends;
console.log(restFriend);
