let number = 75;
// >=90 - Ocinka A
// 90< >=80 - Ocinka B
// 80< >-60 - Ocinka C
//60< - Ne Zdav

/* if (number >=90) {
    console.log("Ocinka A");
} else if (number >=80) {
    console.log("Ocinka B");
} else if (number >=60) {
    console.log("Ocinka C");
} else {
    console.log("Ne zdav");
} */

/*let chas= 12;
if number (>=6 && <12){
    console.log("Ytro");
} else if (chas >=12 && chas <18) {
    console.log("Den");
} else if (number >=18 && chas <24) {
    console.log("Vecher");
} else {
    console.log("Noch");
}*/

/*let num=10;
let result=(num % 2 ===0) ? "Drobnoe" : "Ne drobnoe";
console.log(result);*/


/*let day=8;
let dayName;

switch (day) {
    case 1:
        dayName = "Podedilok";
        console.log(dayName);
        break;
    case 2:
        dayName = "Vivtorok";
        console.log(dayName);
        break;
    case 3:
        dayName = "Sereda";
        console.log(dayName);
        break;
    case 4:
        dayName = "Chetverg";
        console.log(dayName);
        break;
    case 5:
        dayName = "Pyatnica";
        console.log(dayName);
        break;
    case 6:
        dayName = "Subbota";
        console.log(dayName);
        break;
    case 7:
        dayName = "Nedila";
        console.log(dayName);
        break;
        
        default:
        dayName="Nevidomy den";
        console.log(dayName);
}*/


/*let sum=0
for (let i=1; i<=10; i++) {
    sum +=i;
}
console.log("Sum:"+" "+sum);
*/

/*let i=0;
while (i<5)
    { 
        console.log(i);
        i++;
    }
    */

/*let i=0;
do {
    console.log(i);
    i++;
}
while (i<5);
*/

/*for (let i=0; i<10; i++) {
    if (i % 2 ===0) {
        continue;
    } 
    console.log(i);
}
*/
/*
for (let i=1; i<=10; i++)
    {
        for (let j=1; j<=10; j++)
            {
                let result=i*j;
                console.log(`${i}*${j}=${result}`);

            }
            console.log("________");
    }
*/

throw new Error('Ce Standartnyi vynyatok');

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name="MyCustomError";
    }
}
throw new MyCustomError('Ce korystyvatskiy vynyatok');