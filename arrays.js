
// Finding the last element of an array
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

let arrLastElement1 = arr1[arr1.length -1];
console.log(arrLastElement1);


let arrLastElement2 = arr2[arr2.length -1];
console.log(arrLastElement2);



// Js program that joins array into string
myPet = ["Cow", "Bird", "Snake", "Dog"];
let allPets = myPet.join();

console.log(allPets);



// Js script to sort an array
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let sorted = arr3.sort((a,b)=> a-b);
console.log(sorted);



// program that removes duplicates
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let newArr = [new Set(arr)];

// With duplicates
console.log(arr);

// Without duplicates
console.log(newArr);



// Js script to search the words in array
let arr5 = ["the", "way", "x", 4];

if(arr5.indexOf("way") > -1){
    console.log("way")
}
else{
    console.log("The search word wasn't found.");
}



// Js script to sort the string
let word = "sevink";
let sortedString = (word) =>{
    return word.split("").sort().join("");
};
console.log(sortedString("sevink"));


