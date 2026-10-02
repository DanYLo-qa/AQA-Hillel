export class Book{
    #title;
    #author;
    #year;
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year=year;
    }

    get title(){return this.#title; }
    get author(){return this.#author; }
    get year(){return this.#year; }

    set title(value){
        if(typeof value !== 'string'){throw new Error('поле має бути заповнеене словами');}
        if (value.trim() ===''){throw new Error('поле має бути заповнене');}
     this.#title=value;
    }

     set author(value){
        if(typeof value !== 'string'){throw new Error('поле має бути заповнеене словами');}
        if (value.trim() ===''){throw new Error('поле має бути заповнене');}
     this.#author=value;
    }

    set year(value){
        if(typeof value !=='number' || 2026<value || value<0){
            throw new Error("рік не може бути від'ємнимта, не може бути більше за поточний рік та має бути числом");
        }
        this.#year=value;
    }

    static getOldestBook (booksArray){
        return booksArray.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
    }

    printInfo(){
    console.log(`Назва книги: "${this.title}",автор: ${this.author}, рік ${this.year} `);
}

}

