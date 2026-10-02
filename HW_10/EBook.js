import {Book} from './Book.js';

export class EBook extends Book{
    #format;
    constructor(title,author,year,format){
    super(title, author, year);
    this.format=format;
    }

    get format(){return this.#format; }

  
  set format(value){
        if(typeof value !== 'string'){throw new Error('поле має бути заповнеене словами');}
        if (value.trim() ===''){throw new Error('поле має бути заповнене');}
     this.#format=value;
    }

    static fromBook(bookInstance, format){
        return new EBook(
         bookInstance.title,
         bookInstance.author,
         bookInstance.year,
        format);
    }

    printInfo(){
    console.log(`Назва книги: "${this.title}",автор: ${this.author}, рік ${this.year}, формат книги: ${this.format} `);
    }
}

