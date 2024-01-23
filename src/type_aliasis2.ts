// En sammansatt typ av typen Book
type Book = {
    title: string, 
    author: string, 
    year: number
}

// Array av typen Book
const books: Book[] = [
    {title: "The Lord of the Rings", author: "J.R.R Tolkien", year: 1954},
    {title: "The Lord of the Flies", author: "William Golding", year: 1954},
    { title: "The Lord of the Flies", author: "William Golding", year: 1954}
]


// En funktion som lägger till en bok i arrayen books och returnerar en array av typen Book
function printBook(books: Book[]): Book[] {
    
    books.push({title: "The Lord of the Flies", author: "William Golding", year: 1954});
    return books;
    
}