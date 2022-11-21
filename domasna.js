/*1. Imate niza od korisnicki email adresi.
Da se napise funkcija koja  treba da proveri dali sekoj od mailovite e validen
validen mail e toj mail sto im karakter "@", ".com" ili ".net" i nema prazni mesta
Otkako ke zavrsi proverkata, treba VO NOVA niza, da se stavat site nevalidni mejlovi, dokolku ima takvi i novata niza da se ispecati*/
const emails = ['test@test.com', 'test123123', 'koco@koco.net', 'test@koco.co']
function ValidateEmailAddress(emailString) {
    var atSymbol = emailString.indexOf("@");
    if(atSymbol < 1) return false;
    
    var dotCom = emailString.indexOf(".com");
    if(dotCom <= atSymbol + 2) return false;
    
    if (dotCom === emailString.length - 1) return false;
    
    return true;
}

console.log(ValidateEmailAddress(emails))

/*2. Da se napise funkcija koja sto ke prima lista od iminja i preziminja
  Funkcijata treba da proveri dali site iminja i preziminja zapocnuvaat so golema bukva,
  i ako ne, togas da ja napravi golema. Site ostanati bukvi, treba da se pretvorat vo mali.
  Na kraj da se ispecati nizata od transformirani iminja*/
  function capital_letter(str) 
  {
      str = str.split(" ");
  
      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }
  
      return str.join(" ");
  }
  
  console.log(capital_letter("mitka panarin, ana maneva"));
  
  /*3. Imame niza od zivotni na farma.
  Sekoe zivotno e objekt i si ima svoe property broj na noze, i plus drugi svojstva
  So pomosh na posebna funkcija, farmerot treba da izbroi kolku vkupno noze ima vo farmata. */
  
  const myAnimals = [
      { type: 'horse', numberOfLegs: 4 },
      { type: 'sheep', numberOfLegs: 4 },
      { type: 'chicken', numberOfLegs: 2 },
      { type: 'fish', numberOfLegs: 0 },
      { type: 'dog', age: 7, numberOfLegs: 4 },
      { type: 'goat', numberOfLegs: 4 }
    ] 
    function animals(horse, sheep, chicken, fish, dog, goat){
        horseLegs = 1 * 4;
        sheepLegs = 1 * 4;
        chickenLegs = 1 * 2;
        fishLegs = 1 * 0;
        dogLegs = 1 * 4;
        goatLegs = 1 * 4;
        legTotal = horseLegs + sheepLegs + chickenLegs + fishLegs + dogLegs + goatLegs;
        return legTotal
  }
console.log(animals(myAnimals))
  
/*4. Da se napise funkcija koja ke presmetuva kolku vkupno poeni
osvoil nekoj sportski tim
Sportskiot tim e objekt vo koj sto imate broj na porazi,
broj na pobedeni i broj na neresheni natprevari
Za sekoja pobedena timot dobiva 3 poeni, za nereshena 1, a za izgubena -2 */

let defaultWin = 3,
    defaultDraw = 1,
    defaultLoss = -2;

function footballPoints(wins, draws, losses) {
    return defaultWin * wins + defaultDraw * draws + defaultLoss * losses;
}

console.log(footballPoints(3, 4, 2));

/*5. Listata od knigi sto ja rabotevme na chas, da se sortira po azbucen rodosled spored imeto na avtorot*/
const myBooks = [
    {
      author: 'Fyodor Dostoyevsky',
      name: 'Crime and punishment',
      year: 1887,
      ISBN: 1,
      price: 500,
      read: false
    },
    {
      author: 'J.K. Rowling',
      name: 'Harry Potter',
      year: 2000,
      ISBN: 2,
      price: 600,
      read: false
    },
    {
      author: 'J.R.R. Tolkien',
      name: 'The Hobbit',
      year: 1910,
      ISBN: 3,
      price: 1000,
      read: true
    }
  ]
  myBooks.sort(function (a, b) {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });
  
  console.log(myBooks);  