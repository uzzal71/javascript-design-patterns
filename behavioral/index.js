function main(a, b) {
  result = a + b;
  console.log(result);
}

main(10, 10);

const obj1 = {
  name: "uzzal",
  contact: {
    email: "uzzal@gmail.com",
    phone: "9876543210",
  },
};

const obj2 = obj1;

obj2.contact.email = "uzzalroy.acme@gmail.com";

console.log(obj1);

obj2.contact.phone = "01319630372";

console.log(obj2);
