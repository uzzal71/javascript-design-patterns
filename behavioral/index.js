const obj1 = {
  name: "uzzal",
  contact: {
    email: "uzzal@gmail.com",
    phone: "9876543210",
  },
};

const obj2 = Object.assign({}, obj1); // Shallow copy

obj1.contact.email = "uzzalroy.acme@gmail.com";

console.log(obj1); // obj1 remains unchanged

obj2.contact.phone = "01319630372";

console.log(obj2); // obj2 is modified
