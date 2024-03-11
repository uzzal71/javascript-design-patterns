const obj1 = {
  name: "uzzal",
  contact: {
    email: "uzzal@gmail.com",
    phone: "9876543210",
  },
};

// Deep copy using JSON.parse() and JSON.stringify()
const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.contact.email = "uzzalroy.acme@gmail.com";

console.log(obj1); // obj1 has the modified email
console.log(obj2); // obj2 retains the original email
