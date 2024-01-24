//Ternary
//Object Destructuring
const person = {
    name: "Muh Gonda",
    age: 25,
    gernder: "female",
    address: {
        city: "City of Kagandahan",
        barangay: "Nagmamaganda Primero",
        sitio: "Mapagmahal"
    }
};

const{ name, age, gender, address:{city, barangay, sitio}} = person;

console.log(`Si ${name} ay ${age} na taong gulang. Nakatira siya sa ${city}, mula sa Barangay ng ${barangay} sa may Sitio ${sitio}`);

let age1 = age;

let result1 =
    age1 >=18 ? `${name} already had her debut` : `${name} is about to have her debut`;
    console.log(result1);

let result2 =
    age1 >=18 ? `${name} is 18 yearas old above but does not celebrate debut on the 18th birthday` : `${name} Are ypu put of your mind?`;
    console.log(result2)