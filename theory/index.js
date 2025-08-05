// const obj = {
//   name: "Aniket",
//   age: 5,
//   address: {
//     city: "Chandigarh",
//     country: "India",
//   },
//   "email address": "test@ex.com",
// };

// obj.address.pincode = 123456;
// delete obj.age;

// console.log(obj["address"]["pincode"])

// const arr = [1, 2, 3, "four"];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let key in obj) {
//   console.log(key);
// }

// function hello(){
//     console.log("hello...")
// }

// hello()

const test = (name, greetingFunc) => {
  console.log("test", name);
  greetingFunc();
};

const greetingFunc1 = () => {
    console.log("Good morning");
}


test("Aniket", greetingFunc1);
