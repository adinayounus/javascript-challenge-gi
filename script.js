//EASY vv

// //exercise as undefined so we can plug in our exercise 
// function eotd() {
//     let exercise = '';

// // when something is plugged in, exercise = exerciseOTD so the console log will display as a part of calling the createExercise 
//     return {
//         createExercise: function (exerciseOTD) {
//             exercise = exerciseOTD;
//             console.log(`Today's exercise: ${exercise}`);
//         }
//     }   
// }

// let returnExercise = eotd();

// returnExercise.createExercise('abs');



// medium vv

// slicesPerPerson = (slices, people) => {
//it will be equal sliced if we divide
//     const slicesPerPerson = slices / people;
//taking into consideration if no one was eating pizza 
//     if (people === 0) {
//         console.log('No people or pizza')
//         return;
//     }
//toFixed for keeping jsut 2 decimals for the output
//     return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza from our ${slices} slice pizza`;
// }

// console.log(slicesPerPerson(6,2));




// hard vv 

// startPII = () => {
//     const PII = {
//         name: 'Adina Younus',
//         SSN: '123-12-1234'
//     };

//     return {
//         getName: function () {
//             return PII.name;
//         },
//         getSSN: function () {
//             return PII.SSN;
//         }
//     }
// }

// const patient = startPII();
// console.log(patient.getName());
// console.log(patient.getSSN());
// console.log(patient.name);

// very hard vv

// class Person {
//     constructor(name, job, age) {
//         this.name = name;
//         this.job = job;
//         this.age = age;
//     }

//     exercise() {
//         console.log('Push ups are cool')
//     }

//     fetchJob() {
//         console.log(`${this.name} is a ${this.job}`)
//     }
// }


// class Programmer extends Person {
//     constructor(name, job, age, languages){
//         super(name, job, age)
//         this.languages = languages;
//         this.busy = true
//     }

//     offerNewTask() {
//         if (this.busy) {
//             console.log(`${this.name} cannot accept any new tasks right now`)
//             return
//         }
//         console.log(`${this.name} can accept new tasks right now`)
//     }

//     acceptNewTask() {
//         this.busy = true
//     }

//     completeTask() {
//         this.busy = false
//     }

//     learnLanguage(language) {
//         if (!(this.languages.includes(language))) {
//             this.languages.push(language)
//         }
//         else {
//             console.log(`${this.name} already knows this language`)
//         }
//     }

//     listLanguage() {
//         return this.languages
//     }
// }

// const person1 = new Person("Harold", "Backend Engineer", 20);
// const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
// const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
// const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
// c1.learnLanguage("CSS");
// c2.learnLanguage("C++");
// c3.learnLanguage("JAVA");
// console.log('wasup', c1.listLanguage());
// console.log(c2.listLanguage());
// console.log(c3.listLanguage());
// console.log(person1);
// console.log(c1);
// console.log(c2);
// console.log(c3);
// person1.exercise();
// person1.fetchJob();
