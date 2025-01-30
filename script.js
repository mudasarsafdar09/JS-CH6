//Start JS-CH6
//DOM - Document Object Model
//next day 29/01
console.log("Hallo!");
// window.alert("Work Hard. Never waste Time, Time is very imortant in this work");

// console.log(window);

// console.dir(document.body);

// console.log(document.body);

// console.dir(document.body.childNodes[1]);

console.log(document.body.style.background = "green");

// document.body.childNodes[3].innerText = "abcd";

// console.log(document.body.style.h1.color = "yellow");

//DOM Manipulation
//Selecting with id
//document.getElementById("myId")

// let pg = document.getElementById("pg");
// console.dir(pg);

// let prs = document.getElementsByClassName("pr");
// console.dir(prs);

let button = document.getElementById("but1");
console.dir(button);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);

//Query Selector
let firstElement = document.querySelector("p");
console.dir(firstElement);

let allElements = document.querySelectorAll("p");
console.dir(allElements);

let cfirstElement = document.querySelector(".myclass");
console.dir(cfirstElement);

let callElements = document.querySelectorAll(".myclass");
console.dir(callElements);

let icfirstElement = document.querySelector("#idh4");
console.dir(icfirstElement);

let icallElements = document.querySelectorAll("#idh4");
console.dir(icallElements);


//Properties
//tagName : returns tag for element nodes
console.log(button.tagName);
console.log(firstElement.tagName);

console.dir(document.body.firstChild);

let div = document.querySelector("div").children;
 console.log(div);

 let fruits = document.querySelector(".fruits");
 console.dir(fruits);

 let heading = document.querySelector("h1");
 console.dir(heading);

let pq = document.querySelector(".pq");
console.dir(pq.innerText);

pq.innerText = pq.innerText + "from Apna College students";


let boxs = document.querySelectorAll(".qs2divs");
console.log(boxs);

let idx = 1;
for (bom of boxs) {
    console.log(bom);
bom.innerText = `New unique value ${idx}`;
idx++;
}

// boxs[0].innerText = "New unique value one";
// boxs[1].innerText = "New unique value Tow";
// boxs[2].innerText = "New unique value Three";



                                // COMPLETE JS-CH6

