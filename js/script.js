console.log(Math.random()); // min = 0 max 1
let computerChoise = "";
 const number = Math.random();
 if (number < 0.33) {
   computerChoise = "камінь";
 } else if (number >= 0.33 && number <= 0.66) {
   computerChoise = "ножиці";
 } else {
   computerChoise = "папір";
 }

 let userChoise = prompt("Введіть свій варіант");

 if (userChoise === computerChoise) {
   console.log("Нічия");
 } else if (
   (userChoise === "ножиці" && computerChoise === "папір") ||
   (userChoise === "камінь" && computerChoise === "ножиці") ||
   (userChoise === "папір" && computerChoise === "камінь")
 ) {
   alert("Виграв юзер");
 } else {
   alert(`Виграв компютер і він вибрав ${computerChoise}`);
 }