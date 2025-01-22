const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
// Destructuring an object
/*

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
book;

// // working with an array
// const primaryGenre  = genres[0]
// const secondaryGenre  = genres[1]
// primaryGenre

// Destructuring an array
// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;

// spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

// Rest and spread operator on objects
// adding a new property using the spread operator
const updatedBooks = { ...book, moviePublicationDate: "2003-12-09" };
updatedBooks;

const products = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 5 },
];

const pizza = products.find((product) => product.name);
pizza; // { id: 1, name: "Pizza", price: 10 }

// Tenrary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`the book has ${pagesRange} page`);

// Arrow functions
const getYear = (str) => str;
console.log(getYear(publicationDate));

// short circuiting
// falsy: 0, '' , null, undefined
console.log(hasMovieAdaptation && "some string");
const spanishTranslation = book.translations.spanish && "Not translated";
console.log(spanishTranslation);

// Optional chaining operator
function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  // incase the left part is undefined or null, the code still continues
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(book)); */

const books = getBooks();
// the map method creates a new array based on the original array
const x = [1, 2, 3, 4, 5].map((el) => el + 2);
x;
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  const authorTitle = `title: ${book.title}, author: ${book.author}`;
  return authorTitle;
});
essentialData;

// short circuting: when the first operand is true, the and operator will automatically return the second value.
console.log(true && "Some string");

//the short circuting in the AND operator only works when the first value is false
console.log(false && "some string");
// the short circuting in the OR operator woks when the first value is true and then returns it

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  // incase the left part is undefined or null, the code still continues
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

// THE ARRAY FILTER METHOD: used to filter out some elements of the array  based on a condition, and we can chain multiple filter methods too just like this.
const longBooks = books
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
longBooks;
// combining the filter and the map method to get books that inlcludes adventure in it's genres, and also map those book title out using the map method
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// THE ARRAY RREDUCE METHOD: it basically reduces the entire array into just one value
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//THE ARRAY SORT METHOD
const num = [1, 12, 19, 4];
// using the slice method so that the original array would not be mutated
const sorted = num.slice().sort((a, b) => a - b);
sorted;

// WORKING WITH IMMUTABLE ARRAYS
// 1 Add book object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the Chanber of Secretes",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2 Delete a book object from the array
const booksAFterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAFterDelete;

// 3 Update a book object in the array
const booksAfterUpdate = booksAFterDelete.map((book) =>
  book.id === 1
    ? {
        ...book,
        pages: 1210,
      }
    : book
);
booksAfterUpdate;
