// -------------------------- ES6 Snack 5
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const words = ['ciccio', 'pippo', 'parperino', 'pinco', 'PANCO'];

const wordsUpper = words.map( word => word.charAt(0).toUpperCase() + word.substring(1, word.lenght).toLowerCase())
console.log(wordsUpper)

const wordsLower = words.map( word => word.charAt(0).toLowerCase() + word.substring(1, word.lenght).toUpperCase())
console.log(wordsLower)

// -------------------------- ES6 Snack 6
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'puma', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'gatto', famiglia: 'felini', classe: 'mammiferi' },
  { nome: 'pappagallo', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'camaleonte', famiglia: 'camaleontidi', classe: 'rettile' },
  { nome: 'gallo', famiglia: 'fasianidi', classe: 'uccelli' },
]


const mammiferi = animals.filter( animal => animal.classe === 'mammiferi')
console.log(mammiferi)

// -------------------------- ES6 Snack 7
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persons = [
    {fisrtName:'mario', lastName:'rossi', age: 29},
    {fisrtName:'marco', lastName:'rossetti', age: 30 },
    {fisrtName:'matteo', lastName:'rossini', age: 78},
    {fisrtName:'massimo', lastName:'rossoni', age: 15},
    {fisrtName:'mirko', lastName:'rosso', age: 12},
    {fisrtName:'manolo', lastName:'rossisi', age:34 },
]

const drivers = persons.filter( driver => driver.age > 18 && driver.age < 65);
console.log(drivers)

for(driver of drivers){
    console.log(`il signor ${driver.name} ${driver.name} può guidare perchè ha ${driver.age}`)
}