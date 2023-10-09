1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer : B: ReferenceError: greetign is not defined.

Explanation:Typographical error in the code causes "greetign" to be used in place of "greeting" when declaring the variable. Because the variable "greetign" hasn't been defined and JavaScript can't discover it, this will generate a ReferenceError.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer : C :12
Explanation :In javascript , we can add a number and a number but if we try to add a number and a string then, as addition is not possible, 'concatenation' takes place. Here a string and a number ( 1,'2') are added therefore, since a string is involved, we get the result as '12', which is a string.
3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer :A: ['🍕', '🍫', '🥑', '🍔']

Explanation:
In this code, the food array is assigned to the favoriteFood property of the info object. When we subsequently reassign ' info.favoriteFood' to "🍝," it doesn't modify the original 'food' array. Therefore, when we log the food array, it remains unchanged, containing ['🍕', '🍫', '🥑', '🍔'].
4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer : B: Hi there, undefined

In the code  `sayHi` function expects an argument `name` to be passed when it's called. However, in the `console.log(sayHi());` line, the function is called without any arguments, so the `name` parameter inside the function is `undefined`. Therefore, the returned string will be "Hi there, undefined," indicating that no name was provided as an argument when calling the function.
5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer :C: 3

In  code, the forEach loop iterates over the elements in the nums array. Inside the loop, there's a condition if (num) which checks if the current num is truthy. Since 0 is considered falsy in JavaScript and all other values in the array are truthy, the loop will increment the count variable for each element except 0. Therefore, the final value of count is 3, indicating that there are three truthy values in the array.