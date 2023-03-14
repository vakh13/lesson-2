"use strict";

// დავალება 1

let x = 0;

for (let i = 5; i < 100; i++) {
  console.log(i);
}

// დავალება 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1) {
  // console.log(item);

  if (item > 0 && item < 10) {
    console.log(item);
  }
}

// დავალება 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let y of array2) {
  // console.log(y);

  if (y == 5) {
    console.log("aris");
    break;
  }
}



// დავალება 4

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let index = 0; index < array3.length; index++) {
  sum += array3[index];
}

console.log(sum);

// დავალება 5

let array4 = [1, 2, 3, 7, 6, 9];

let sum = 0

for (let i = 0; i < array4.length; i++){
  sum += array4[i];
}
console.log(sum);
let everage = sum / array4.length;
console.log(everage);




// დავალება 6
let array5 = [1, 2, 3, 7, 6, 9];
for (let z of array5) {
  // console.log(z);

  if (z == 7) {
    continue;
  }

  console.log(z);
}

// დავალება 7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};


delete user.studentstatus;
console.log(user);

// დავალება 8

let user1 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (user1.age < 18 && user1.studentstatus == "active") {
  console.log("Hello");
} else if (user1.name == "levan") {
  console.log("Hello Levan");
} else if (user1.studentstatus == "active" || user1.age < 25) {
  console.log("Hello world");
} else {
  console.log("Error");
}

let result =
  user1.age < 18 && user1.studentstatus == "active"
    ? "Hello"
    : user1.name == "levan"
    ? "Hello Levan"
    : user1.studentstatus == "active" || user1.age < 25
    ? "Hello World"
    : "Error";

console.log(result);

// დავალება 9

let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  

  for (let x of element) {
    

    if (x > 0) {
      console.log(x);
    }
  }
}

// დავალება 10
let array10 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (const x of array10) {
  

  // #1
  if (x % 2 == 0) {
    console.log(x);
  }

  // #2
  if (x % 2 == 1) {
    console.log(x);
  }
}

// დავალება 11
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (const z of users) {
  

  if (z.status == true) {
    console.log(z);
  }
}