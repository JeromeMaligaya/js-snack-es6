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