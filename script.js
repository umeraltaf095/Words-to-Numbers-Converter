console.log("Hello");
const mapping = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["ten", 10],
  ["eleven", 11],
  ["twelve", 12],
  ["thirteen", 13],
  ["fourteen", 14],
  ["fifteen", 15],
  ["sixteen", 16],
  ["seventeen", 17],
  ["eighteen", 18],
  ["nineteen", 19],
  ["twenty", 20],
  ["thirty", 30],
  ["forty", 40],
  ["fifty", 50],
  ["sixty", 60],
  ["seventy", 70],
  ["eighty", 80],
  ["ninety", 90],
  ["hundred", 100],
  ["thousand", 1000],
  ["lac", 100000],
  ["crore", 10000000],
]);
const inputForm = document.getElementById("inputForm");
const inputWord = document.getElementById("inputWord");
const output = document.getElementById("output");

let words ;
let arrayValue;
let total = 0;
let group = 0;
inputForm.addEventListener('submit', ()=>{
event.preventDefault();
total = 0;
group = 0;
words = inputWord.value;
console.log(words);

const array = words.split(" ");

array.forEach((arr) => {
  arrayValue = arr;
  mapping.forEach((value, key) => {
    if (key == arrayValue) {
      if (value < 10) {
        group += value;
      } else if (value >= 10 && value < 100) {
        group += value;
      } else if (value >= 100 && value < 1000) {
        group *= value;
      } else if (value >= 1000 && value < 10000000) {
        group *= value;
        total += group;
        group = 0;
      }
    }
  });
});
total += group;
output.textContent = total ;

});






