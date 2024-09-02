// 1.recupero l'elemento dal Dom

//2.raccolta dati
const names = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// 3.lavorazione dati

const invitedList = names.map((guestName, i) =>({
    // nome del tavolo
    tableName: 'VIP',
    // nome invitato
    guestName,
    // posto occupato
    place: i + 1,
}))

// 4.generazione output
console.table(invitedList)



// -------------------- snack 2

// 1.recupero l'elemento dal Dom

//2.raccolta dati
const students = [
    {id: 213, name:'Marco della Rovere' , grade: 78,},
    {id: 110, name:'Paola Cortellessa' , grade: 96,},
    {id: 250, name:'Andrea Mantegna' , grade: 48,},
    {id: 145, name:'Gaia Borromini' , grade: 74,},
    {id: 196, name:'Luigi Grimaldello' , grade: 68,},
    {id: 102, name:'Piero della Francesca' , grade: 50,},
    {id: 120, name:'Francesca da Polenta' , grade: 84,},
]

// 3.lavorazione dati
//targhe nomi in maiuscolo
const nameStudents = students.map(nameStudent => nameStudent.name.toUpperCase())
// generazione output
console.log('targhe in maiuscolo', nameStudents)

//studenti con voto > 70
const gradesOver70 = students.filter(grade70 => grade70.grade > 70)
// generazione output
console.log('grades > 70',gradesOver70)

//studenti con voto > 70 e id > 120
const targetStudents = gradesOver70.filter(target => target.id > 120)

console.log('grades > 70 && id > 120',targetStudents)
// generazione output
/*
const studs = students.filter(stud => stud.grade > 70 && stud.id > 120)
console.log('grades > 70 && id > 120',studs)
*/

//esercizio finito

// -------------------- snack 3
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const bikes = [
    {name:'bianchi'},
    {name:'colnago'},
    {name:'pinarello'},
    {name:'wilier'},
    {name:'daccordi'},
    {name:'olmo'},
    {name:'cinelli'},
    {name:'cipollini'},
]

//assegno il peso per ogni bici
for(bike of bikes){
    bike.weight = getRandomNumber(10, 30);
}
console.table('bikes', bikes)

let bikeLighter = bikes[0];
//cerco la bici piu leggera
bikes.forEach( bike =>{
    const {weight} = bike;
    (weight < bikeLighter.weight) ? bikeLighter = bike : bikeLighter;
});
// stampo in console la bici piu leggera
console.log(`la bici più leggera è: ${bikeLighter.name.toUpperCase()} con il peso di ${bikeLighter.weight}`)

// -------------------- snack 4
/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.§*/

const teams = [
    {team:'ac milan', points: 0, fouls: 0},
    {team:'as roma', points: 0, fouls: 0},
    {team:'ss lazio', points: 0, fouls: 0},
    {team:'fc internazionale', points: 0, fouls: 0},
    {team:'juventus', points: 0, fouls: 0},
]

//assegno i punti e i fali per ogni squadra
teams.forEach( team => {
    team.points = getRandomNumber(30, 114);
    team.fouls = getRandomNumber(20, 70);
})

console.log(teams)

// nuovo array con punti e falli
const pointsAndFouls = teams.map( element => {
    const {points, fouls} = element;
    return {points, fouls}
})
// stampo in console il nuovo array
console.log(pointsAndFouls)