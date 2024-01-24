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


