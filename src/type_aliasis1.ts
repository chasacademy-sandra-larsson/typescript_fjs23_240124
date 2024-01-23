{
// Type aliasis - skapar en sammansatt typ Person
type Person = {
    name: string;
    age: number;
    isMarried: boolean;
    height?: number;
}

// Skapar en variabel av typen Person
const person: Person = {
    name: "Torsten",
    age: 45,
    isMarried: true,
   
}

// En funktion som tar en parameter av typen Person och returnerar void (alltså ingen return)
function printPerson(person: Person):void {

console.log(`Name: ${person.name}, Age: ${person.age}, Married: ${person.isMarried}, Height: ${person.height}`);

}

printPerson(person);

}

