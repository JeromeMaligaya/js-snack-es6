// 1.recupero l'elemento dal Dom

//2.raccolta dati
const names = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// 3.lavorazione dati

const invetedList = names.map((guestName, i) =>({
    // nome del tavolo
    tableName: 'VIP',
    // nome invitato
    guestName,
    // posto occupato
    place : i + 1,
}))

// 4.generazione output
console.table(invetedList)











// 1.recupero l'elemento dal Dom

//2.raccolta dati

// 3.lavorazione dati

// 4.generazione output
