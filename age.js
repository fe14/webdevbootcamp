var age = prompt("How old are you?");

if(age < 0){
    alert("You're not born yet!");
}

if(age === 21){
        alert("Happy 21st birthday!");
    }

if(age % 2 !== 0){
        alert("Your age is odd!");
    }

 if(age % Math.sqrt(age) === 0){
         alert("Perfect square!");
     }
