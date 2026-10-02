import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('Colony','Max Kidruk', 2022);
book1.printInfo()

const book2 = new Book('Project Hail Mary','Andy Weir ',2021);
book2.printInfo()

const book3 = new Book('Le Comte de Monte-Cristo','Alexandre Dumas', 1844);
book3.printInfo()


    const ebook1 = new EBook('Colony','Max Kidruk', 2022, 'PDF');
ebook1.printInfo()

    const ebook2 =new EBook('Project Hail Mary','Andy Weir ',2021, 'FB2');
ebook2.printInfo()
    
    const ebook3 =new EBook('Le Comte de Monte-Cristo','Alexandre Dumas', 1844, 'EBUP');
ebook3.printInfo()

const allBooks =[book1,book2,book3,ebook1,ebook2,ebook3];
console.log('Найстарша книжка:');
const oldestBook =Book.getOldestBook(allBooks);

oldestBook.printInfo();

const convertedEBook = EBook.fromBook(book1, 'EPUB');
console.log('Конвертована електронна книга:');
convertedEBook.printInfo();
