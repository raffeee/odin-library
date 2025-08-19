const myLibrary = [];

function Book(title, author, pagecount, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call this constructor.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pagecount} pages, ${read}`
    }
}

function addBookToLibrary(title, author, pagecount, read) {
    myLibrary.push(new Book(title, author, pagecount, read))
}

function removeBookFromLibrary(id) {
    // add guard clause for if book is not found?
    myLibrary.pop(myLibrary.find((book) => book.id == id))
}